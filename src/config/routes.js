import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import ProductPage from '../pages/ProductPage';
import Signup from '../pages/Signup';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/signup',
    component: Signup,
  },
  {
    path: '/:id',
    component: ProductPage,
  },
  {
    path: '/*',
    component: NotFound,
  },
];

export default routes;
