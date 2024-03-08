import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { container, main } from './App.css';
import { Menu } from './components/header/Menu';
import { Toast } from './components/toast/Toast';
import { Index } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
]);

export const App = () => (
  <div className={container}>
    <Menu />
    <div className={main}>
      <RouterProvider router={router} />
      <Toast />
    </div>
  </div>
);
