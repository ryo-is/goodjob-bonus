import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { container, main } from './App.css';
import { Header } from './components/header/Header';
import { Menu } from './components/menu/Menu';
import { Toast } from './components/toast/Toast';
import { Index } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
]);

export const App = () => (
  <>
    <Header />
    <div className={container}>
      <Menu />
      <div className={main}>
        <RouterProvider router={router} />
        <Toast />
      </div>
    </div>
  </>
);
