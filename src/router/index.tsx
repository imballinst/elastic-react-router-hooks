import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EuiCustomLink from './EuiCustomLink';
import Home from '../views/Home';
import About from '../views/About';

export default function RootRoutes() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="nav">
            <li className="list-item">
              <EuiCustomLink to="/">Home</EuiCustomLink>
            </li>
            <li className="list-item">
              <EuiCustomLink to="/about">About</EuiCustomLink>
            </li>
          </ul>

          <hr />
        </nav>
        <main className="content">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </main>
      </div>
    </Router>
  );
}
