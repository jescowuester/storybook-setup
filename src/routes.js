import { NotFound, Home } from './pages';
import App from './app';
// import withTracker from './utils/withTracker';

const publicRoutes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    component: NotFound
  }
];

export default [
  {
    component: App, // withTracker(App),
    routes: publicRoutes
  }
];
