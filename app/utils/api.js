import axios from 'axios';

/**
 * ___Axios___
 *
 * Helper Functions
 *  • breaks up complexity
 *  • used to send http requests to GitHub API
 *  • also to run score algorithm
 *
 * promise-chaining to gather and format data asynchronously
 *
 * encodeURI changes URLs
 */

// inputting my own id & secret to prevent rate-limiting/permission denied errors
var id = '3e0c0ef4fe587b74aa79';
var sec = '19fad15b9f666d4c715d76d46b8e6d344d4fedb7';
var params = '?client_id=' + id + '&client_secret=' + sec;

// make a get request and axios returns a promise that will be invoked after we get the info
function getProfile(username) {
  return axios.get('https://api.github.com/users/' + username + params).then(function(user) {
    return user.data;
  });
}

function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100');
}

// reduce the array data to a single number
// starting at 0 and we iterate over the items in the array and add to counter
function getStarCount(repos) {
  return repos.data.reduce(function(count, repo) {
    return count + repo.stargazers_count;
  }, 0);
}

// algorithm to calculate user score
function calculateScore(profile, repos) {
  var followers = profile.followers;
  var totalStars = getStarCount(repos);
  return followers * 3 + totalStars;
}

function handleError(error) {
  console.warn(error);
  return null;
}

// axios.all takes array of promises
// calls ".then" function once getProfile & getRepos been resolved
// we create a new data array with that info, putting profile 1st and repos 2nd
// finally we return an object with the profile and their final score
function getUserData(player) {
  return axios.all([getProfile(player), getRepos(player)]).then(function(data) {
    var profile = data[0];
    var repos = data[1];
    return {
      profile: profile,
      score: calculateScore(profile, repos)
    };
  });
}

// sort property used to return new array with higher scoring player first
// the sub "compare function" is what decides the order
// we need it in descending order
function sortPlayers(players) {
  return players.sort(function(a, b) {
    return b.score - a.score;
  });
}

// map over players and get sorted data through helper functions
module.exports = {
  battle: function(players) {
    return axios
      .all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError);
  },
  fetchPopularRepos: function(language) {
    var encodedURI = window.encodeURI(
      'https://api.github.com/search/repositories?q=stars:>1+language:' +
        language +
        '&sort=stars&order=desc&type=Repositories'
    );

    return axios.get(encodedURI).then(function(response) {
      return response.data.items;
    });
  }
};
