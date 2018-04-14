import React from 'react';
import PropTypes from 'prop-types';

/**
 * ___Player Preview___
 *
 * The UI shown when the username is successfully entered
 *
 * All info taken from their profiles using the Github API
 */

function PlayerPreview(props) {
  return (
    <div>
      <div className="column">
        <img className="avatar" src={props.avatar} alt={'Avatar for ' + props.username} style={{ color: 'white' }} />
        <h2 className="username">@{props.username}</h2>
      </div>
      {props.children}
    </div>
  );
}

// Typechecking
PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default PlayerPreview;
