/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import Header from 'src/components/common/Header/';
import appRoutes from 'src/routes/';
import { RouteType } from 'src/routes/routes.d';

function generateRoutes(routes: Array<RouteType>) {
  return (
    <Switch>
      {routes.map((route) =>
        Array.isArray(route.component) ? (
          <Route path={route.path} key={route.name} exact={route.exact || false}>
            {generateRoutes(route.component)}
          </Route>
        ) : (
          <Route
            component={route.component}
            exact={route.exact || false}
            path={route.path}
            key={route.name}
          />
        ),
      )}
    </Switch>
  );
}

function App() {
  return (
    <>
      <Router>
        <Header />
        {generateRoutes(appRoutes)}
      </Router>
    </>
  );
}

export default App;
