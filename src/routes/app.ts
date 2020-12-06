import About from 'src/views/About/';
import Home from 'src/views/Home/';
import { RouteType } from './index';

const indexRoutes: Array<RouteType> = [
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];
export default indexRoutes;
