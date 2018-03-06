import axios from 'axios';

var id = '3e0c0ef4fe587b74aa79';
var sec = '19fad15b9f666d4c715d76d46b8e6d344d4fedb7';
var params = '?client_id' + id + '&client_secret=' + sec;

function getProfile(username) {
  return axios.get('https://api.github.com/users/' + username + params).then(function(users) {
    return user.data;
  });
}

function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100');
}

module.exports = {
  battle: function(players) {},
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
