import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';

import EuiCustomLink from './EuiCustomLink';
import Home from '../views/Home';
import About from '../views/About';

import Drawer from '../views/Drawer';
import { basePath, homePath, aboutPath } from '../links';

export default function RootRoutes() {
  const history = useHistory();

  useEffect(() => {
    history.push(basePath);
  }, [history]);

  return (
    <div>
      <nav style={{ paddingLeft: 53 }}>
        <ul className="nav">
          <li className="list-item">
            <EuiCustomLink to={homePath}>Home</EuiCustomLink>
          </li>
          <li className="list-item">
            <EuiCustomLink to={aboutPath}>About</EuiCustomLink>
          </li>
        </ul>

        <hr />
      </nav>
      <Drawer />

      <main className="content" style={{ paddingLeft: 60 }}>
        <Route exact path={homePath} component={Home} />
        <Route path={aboutPath} component={About} />
      </main>
    </div>
  );
}
