import React from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import appRoutes, { RouteType } from 'src/routes/';

function App() {
  return (
    <>
      <Router>
        <Switch>
          {appRoutes.map((route: RouteType) => (
            <Route
              component={route.component}
              exact={route.exact || false}
              path={route.path}
              key={route.name}
            />
          ))}
        </Switch>
      </Router>
    </>
  );
}

export default App;
