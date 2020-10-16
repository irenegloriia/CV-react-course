import { Home, About, Resume } from '../pages';

const routes = [
  {
    path: '/about',
    component: About,
    isPublic: true,
  },
  {
    path: '/resume',
    component: Resume,
    isPublic: true,
  },
  {
    path: '/home',
    component: Home,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
