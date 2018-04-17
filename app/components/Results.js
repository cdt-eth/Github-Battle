import React, { Component, Fragment } from 'react';
import queryString from 'query-string';
import api from '../utils/api';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PlayerPreview from './PlayerPreview';
import Loading from './Loading';

/**
 * ___Results Page___
 *
 * display winner, loser, and score breakdown
 */

function Profile(props) {
  var info = props.info;

  return (
    <PlayerPreview username={info.login} avatar={info.avatar_url}>
      {/* children UI */}
      <ul className="space-list-items">
        {info.name && <li>{info.name}</li>}
        {info.location && <li>{info.location}</li>}
        {info.company && <li>{info.company}</li>}
        <li>Followers: {info.followers}</li>
        <li>Following: {info.following}</li>
        <li>Public Repos: {info.public_repos}</li>
        {info.blog && (
          <li>
            <a href={info.blog}>{info.blog}</a>
          </li>
        )}
      </ul>
    </PlayerPreview>
  );
}

// Typechecking
Profile.propTypes = {
  info: PropTypes.object.isRequired
};

// UI for each player column
function Player(props) {
  return (
    <div>
      <h1 className="header">{props.label}</h1>
      <h3>Score: {props.score}</h3>
      <Profile info={props.profile} />
    </div>
  );
}

// Typechecking
Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired
};

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    };
  }
  // parses query to access players
  componentDidMount() {
    var players = queryString.parse(this.props.location.search);

    // the actual battle function call where actual user data goes in
    api.battle([players.playerOneName, players.playerTwoName]).then(
      function(players) {
        if (players === null) {
          return this.setState(function() {
            return {
              error: 'Looks like there was an error. Check that both users exist on Github.',
              loading: false
            };
          });
        }

        // if no error re-render is called to update state and UI
        // we now have players and no loading
        this.setState(function() {
          return {
            error: null,
            winner: players[0],
            loser: players[1],
            loading: false
          };
        });
      }.bind(this)
    );
  }
  render() {
    var error = this.state.error;
    var winner = this.state.winner;
    var loser = this.state.loser;
    var loading = this.state.loading;

    if (loading === true) {
      return <Loading />;
    }

    if (error) {
      return (
        // React Fragments replaces unnecessary DOM nodes
        <Fragment>
          <p style={{ color: 'white', textAlign: 'center', fontSize: '22px' }}>{error}</p>
          <Link to="/battle" className="button">
            Reset
          </Link>
        </Fragment>
      );
    }

    return (
      // final results UI
      <Fragment>
        <div className="row">
          <Player label="Winner" score={winner.score} profile={winner.profile} />
          <Player label="Loser" score={loser.score} profile={loser.profile} />
        </div>
        <Link to="/battle" className="battleAgain">
          {' '}
          Battle again{' '}
        </Link>
      </Fragment>
    );
  }
}

export default Results;
