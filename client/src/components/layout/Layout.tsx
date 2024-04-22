import { Outlet } from 'react-router-dom';

import { container, main } from './Layout.css';
import { Header } from '../header/Header';
import { Menu } from '../menu/Menu';

export const Layout = () => (
  <div className={container}>
    <Menu />
    <div>
      <Header />
      <div className={main}>
        <Outlet />
      </div>
    </div>
  </div>
);
