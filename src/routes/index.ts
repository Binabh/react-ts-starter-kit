import React from 'react';
import app from './app';

export type RouteType = {
  path: string;
  exact?: boolean;
  name: string;
  component: React.ComponentClass | React.FC;
};

const routes = [...app];

export default routes;
