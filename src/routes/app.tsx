import React from 'react';
import About from 'views/About/';
import Home from 'views/Home/';

import { RouteObject } from 'react-router-dom';

const appRoutes: Array<RouteObject> = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
];
export default appRoutes;
