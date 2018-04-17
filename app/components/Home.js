import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * ___Homepage___
 *
 * Welcome page UI
 *
 * Button linking to Battle page
 */

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div>
          <img
            className="ghLogo"
            src={require('./images/GitHub-Mark-Light-120px-plus.png')}
            alt="github logo"
            style={{ padding: '20px 0px 0px 0px', height: '100px' }}
          />
        </div>

        <h1>
          Github Battle:
          <br />
          Challenge your friends!
        </h1>

        <h3>Input any 2 Github usernames to compare stats and see who comes out on top!</h3>

        <Link className="homeButton" to="/battle">
          Battle
        </Link>

        {/* <p className="homeCredit">
          checkout out the project
          <a className="homeHere" href="https://github.com/christiandavidturner/github-battle-react" target="_blank">
            {' '}
            on Github
          </a>
        </p> */}
      </div>
    );
  }
}

export default Home;
