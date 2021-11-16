import App from '../App';

const routes = [
  {
    path: '/',
    exact: true,
    component: App,
  },
  {
    path: '/items',
    exact: true,
    component: App,
  },
  {
    path: '/items/:id',
    exact: true,
    component: App,
  },
];

export default routes;
