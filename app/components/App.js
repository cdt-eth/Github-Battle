import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Battle from './Battle';
import Results from './Results';
import Popular from './Popular';

/**
 * ___Main Component___
 *
 * Routing set up & Switch used to render exact path "/" exclusively
 *
 * Named imports used to drop "React" from "React.Component"
 */

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            {/* exact used so battle componenet isn't rendered on results page */}
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/battle/results" component={Results} />
            <Route path="/popular" component={Popular} />
            <Route
              // Routing error page
              render={function() {
                return (
                  <p
                    // experimenting with inline styles
                    style={{
                      color: 'white',
                      'margin-top': '20',
                      'text-align': 'center',
                      'font-size': '50px',
                      'font-family': 'sans-serif',
                      'font-weight': '300'
                    }}
                  >
                    Not Found
                    <br />
                    <span
                      style={{
                        color: 'white',
                        'text-align': 'center',
                        'font-size': '25px',
                        'font-style': 'italic',
                        'font-family': 'sans-serif',
                        'font-weight': '500'
                      }}
                    >
                      please go back and try again
                    </span>
                  </p>
                );
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
