import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * ___Loading Component___
 *
 * 1. in CDM we set the interval every 150ms the func runs
 * 2. new text of state is the prevState text plus a dot
 * 3. caps out at 3 dots bc "stopper" has 3 dots
 * 4. then in CWU we clear the interval
 *
 *  this animates a make-shift Loading transition
 */

var styles = {
  // experimenting with objects in inline styles
  loadStyle: {
    textAlign: 'center',
    fontSize: '35px',
    color: 'white'
  }
};

class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // taken from defaultProps since nothing was explicitly set
      text: props.text
    };
  }

  componentDidMount() {
    var stopper = this.props.text + '...';
    this.interval = window.setInterval(
      function() {
        if (this.state.text === stopper) {
          this.setState(function() {
            return { text: this.props.text };
          });
        } else {
          this.setState(function(prevState) {
            return {
              // as explained above, adds one dot to "Loading" every 150ms until it caps at 3 dots
              text: prevState.text + '.'
            };
          });
        }
      }.bind(this),
      // interval set twice as fast as defaultProps to compare with the fallback
      150
    );
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return <p style={styles.loadStyle}>{this.state.text}</p>;
  }
}

// Typechecking
Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
};

// default speed set in case something gets altered by parent component
Loading.defaultProps = {
  text: 'Loading',
  speed: 300
};

export default Loading;
