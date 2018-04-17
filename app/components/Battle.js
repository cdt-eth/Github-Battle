import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PlayerPreview from './PlayerPreview';

/**
 * ___Battle Page___
 *
 * Battle
 *  • two empty player inputs (<PlayerInput />) are rendered
 *  • when user types in any input onChange runs updating state then username value
 *  • when user hits submits, handleSubmit, in <PlayerInput />, is called
 *  • it passes id & username via this.props.onSubmit
 *  • which runs handleSubmit in <Battle />, giving it that id & username
 *  • values are passed and state is updated
 */

class PlayerInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // input value becomes username
  handleChange(event) {
    var value = event.target.value;
    this.setState(function() {
      return {
        username: value
      };
    });
  }

  handleSubmit(event) {
    // prevents submitting to a server
    event.preventDefault();
    this.props.onSubmit(this.props.id, this.state.username);
  }

  render() {
    return (
      <form className="column" onSubmit={this.handleSubmit}>
        <label className="header" htmlFor="username">
          {this.props.label}
        </label>
        <input
          id="username"
          placeholder="github username"
          type="text"
          autoComplete="off"
          value={this.state.username}
          onChange={this.handleChange}
          ref={this.props.inputRef}
        />
        <button className="button" type="submit" disabled={!this.state.username}>
          {' '}
          Submit{' '}
        </button>
      </form>
    );
  }
}

// Typechecking
PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};
PlayerInput.defaultProps = {
  label: 'Username'
};

// ___Inputting Users___
// to update Parent state we pass children the onSubmit function
// function receives state (username:'')
// later invoked (onSubmit) with child state (new username we input)
// which then updates parent state
class Battle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    };

    this.playerOneInput = null;
    this.playerTwoInput = null;

    // ensures 'this' is linked to this component
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  // input 1 focus set once mounted
  componentDidMount() {
    this.playerOneInput.focus();
  }

  // id = p1 or p2
  // username is value of input
  handleSubmit(id, username) {
    this.setState(function() {
      var newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
      return newState;
    });
    // onSubmit it shifts focus to input 2
    this.playerTwoInput.focus();
  }

  // resets state back to original form
  handleReset(id) {
    this.setState(function() {
      var newState = {};
      newState[id + 'Name'] = '';
      newState[id + 'Image'] = null;
      return newState;
    });
  }

  render() {
    var match = this.props.match;
    var playerOneName = this.state.playerOneName;
    var playerOneImage = this.state.playerOneImage;
    var playerTwoName = this.state.playerTwoName;
    var playerTwoImage = this.state.playerTwoImage;

    return (
      // React Fragments replaces unnecessary DOM nodes (wrapper <div>)
      <Fragment>
        <div className="row">
          {!playerOneName && (
            <PlayerInput
              id="playerOne"
              label="Player One"
              onSubmit={this.handleSubmit}
              inputRef={input => {
                this.playerOneInput = input;
              }}
            />
          )}

          {playerOneImage !== null && (
            <PlayerPreview avatar={playerOneImage} username={playerOneName}>
              {/* children UI */}
              <button className="reset" onClick={this.handleReset.bind(this, 'playerOne')}>
                Reset
              </button>
            </PlayerPreview>
          )}

          {!playerTwoName && (
            <PlayerInput
              id="playerTwo"
              label="Player Two"
              onSubmit={this.handleSubmit}
              inputRef={input => {
                this.playerTwoInput = input;
              }}
            />
          )}

          {playerTwoImage !== null && (
            <PlayerPreview avatar={playerTwoImage} username={playerTwoName}>
              {/* children UI */}
              <button className="reset" onClick={this.handleReset.bind(this, 'playerTwo')}>
                Reset
              </button>
            </PlayerPreview>
          )}
        </div>

        {/* Once we have both usernames */}
        {playerOneImage &&
          playerTwoImage && (
            <Link
              className="button"
              // appending more params to match's dynamic url property
              to={{
                pathname: match.url + '/results',
                search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
              }}
            >
              Battle
            </Link>
          )}
      </Fragment>
    );
  }
}

export default Battle;
