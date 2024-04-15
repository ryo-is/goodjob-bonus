import { container, menuItem, menuItemContainer } from './Menu.css';

export const Menu = () => (
  <div className={container}>
    <div className={menuItemContainer}>
      <a href="/" className={menuItem}>
        Dashboard
      </a>
    </div>
  </div>
);
