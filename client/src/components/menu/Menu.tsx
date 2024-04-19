import {
  container,
  icon,
  menuItem,
  menuItemContainer,
  title,
} from './Menu.css';
import { PaperAirplaneIcon, ClipboardIcon } from '@heroicons/react/24/outline';

export const Menu = () => (
  <div className={container}>
    <div className={title}>👍 Goodjob Bonus</div>
    <div className={menuItemContainer}>
      <a href="/" className={menuItem}>
        <ClipboardIcon className={icon} />
        Dashboard
      </a>
      <a href="/" className={menuItem}>
        <PaperAirplaneIcon className={icon} />
        Send Bouns
      </a>
    </div>
  </div>
);
