import { UserCircleIcon } from '@heroicons/react/20/solid';

import { container, icon } from './Header.css';

export const Header = () => (
  <div className={container}>
    <UserCircleIcon className={icon} />
  </div>
);
