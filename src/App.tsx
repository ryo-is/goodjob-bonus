import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { container } from './App.css';
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
    <RouterProvider router={router} />
    <Toast />
  </div>
);
