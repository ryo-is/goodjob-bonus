import { container, menuItem, menuItemContainer, title } from './Menu.css';

export const Menu = () => (
  <div className={container}>
    <div className={title}>👍 Goodjob Bonus</div>
    <div className={menuItemContainer}>
      <a href="/" className={menuItem}>
        Dashboard
      </a>
    </div>
  </div>
);
