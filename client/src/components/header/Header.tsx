import { container, icon } from './Header.css';
import { UserCircleIcon } from '@heroicons/react/20/solid';

export const Header = () => (
  <div className={container}>
    <UserCircleIcon className={icon} />
  </div>
);
