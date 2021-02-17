import React from 'react';

export type RouteType = {
  path: string;
  exact?: boolean;
  name: string;
  component: React.ComponentClass | React.FC | Array<RouteType>;
};
