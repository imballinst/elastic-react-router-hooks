import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import EuiCustomLink from './EuiCustomLink';
import Home from '../views/Home';
import About from '../views/About';

const basePath = '/elastic-react-router-hooks';
const homePath = `${basePath}/`;
const aboutPath = `${basePath}/about`;

export default function RootRoutes() {
  const history = useHistory();

  useEffect(() => {
    history.push(basePath);
  }, [history]);

  return (
    <div>
      <nav>
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
      <main className="content">
        <Route exact path={homePath} component={Home} />
        <Route path={aboutPath} component={About} />
      </main>
    </div>
  );
}
