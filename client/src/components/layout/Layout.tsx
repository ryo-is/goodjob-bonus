import { Outlet } from 'react-router-dom';

import { container, main } from './Layout.css';
import { Header } from '../header/Header';
import { Menu } from '../menu/Menu';
import { Toast } from '../toast/Toast';

export const Layout = () => (
  <>
    <Header />
    <div className={container}>
      <Menu />
      <div className={main}>
        <Outlet />
        <Toast />
      </div>
    </div>
  </>
);
