import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import 'antd/dist/antd.css';

class App extends Component {
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
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
