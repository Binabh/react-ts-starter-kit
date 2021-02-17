import React from 'react';
import About from 'src/views/About/';
import Home from 'src/views/Home/';
import Topic from 'src/views/Topic/';
import SubTopic from 'src/views/SubTopic/';
import { RouteType } from './routes.d';

const indexRoutes: Array<RouteType> = [
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/topics',
    name: 'Topic',
    component: [
      { path: '/topics/subtopic', name: 'Sub Topic', component: SubTopic },
      { path: null, name: 'Topic', component: Topic },
    ],
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];
export default indexRoutes;
