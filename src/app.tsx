import React from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import Header from 'src/components/common/Header/';
import appRoutes from 'src/routes/';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {appRoutes.map((route) => (
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
