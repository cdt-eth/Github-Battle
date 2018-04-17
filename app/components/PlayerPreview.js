import React from 'react';
import PropTypes from 'prop-types';

/**
 * ___Player Preview___
 *
 * The UI shown when the username is successfully entered
 *
 * used differently in <Battle /> than in <Results />
 */

function PlayerPreview(props) {
  return (
    <div>
      <div className="column">
        <img className="avatar" src={props.avatar} alt={'Avatar for ' + props.username} style={{ color: 'white' }} />
        <h2 className="username">@{props.username}</h2>
      </div>
      {/* used in two places with unique UI */}
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
