import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import { NotFoundPage } from './pages';
import 'antd/dist/antd.css';

export default class App extends Component {
  componentDidCatch(err, errinfo) {
    console.log('dsadsa', err, errinfo);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                exact
                path={route.path}
                component={route.component}
              />
            );
          })}
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
