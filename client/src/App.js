import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.js';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div >
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
