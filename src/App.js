import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { routes } from './routes';
import { NotFoundPage } from './pages';
import 'antd/dist/antd.css';

export default class App extends Component {
  componentDidCatch(err, errinfo) {
    console.log('dsadsa', err, errinfo);
  }

  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                exact={!!route.exact}
                path={route.path}
                component={route.component}
              />
            );
          })}
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}
