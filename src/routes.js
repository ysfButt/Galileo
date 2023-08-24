import { lazy } from 'react';

// Layouts
import AppLayout from 'layouts/app';

// Components
const Home = lazy(() => import("./pages/Home"));
const Tracker = lazy(() => import("./pages/Tracker"));

const routes = [
  {
    path: '/',
    component: Home,
    layout: AppLayout,
    exact: true,
  },
  {
    path: '/tracker',
    component: Tracker,
    layout: AppLayout,
    exact: true,
  }
];

export default routes;
