import { ChartBarSquareIcon } from '@heroicons/react/24/outline';

import {
  container,
  icon,
  menuItem,
  menuItemContainer,
  title,
} from './Menu.css';

export const Menu = () => (
  <div className={container}>
    <div className={title}>Mahjong Portal</div>
    <div className={menuItemContainer}>
      <a href="/" className={menuItem}>
        <ChartBarSquareIcon className={icon} />
        Dashboard
      </a>
    </div>
  </div>
);
