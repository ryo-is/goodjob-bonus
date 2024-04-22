import {
  HandThumbUpIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

import { icon, tableBody, tableHeader, countCell } from './UsersTable.css';

import { RouterOutputs } from '@/utils/trpc';

type UsersTableProps = {
  users: RouterOutputs['userList'];
};

export const UsersTable = ({ users }: UsersTableProps) => (
  <div>
    <div className={tableHeader}>
      <div>Name</div>
      <div>Goodjob Count</div>
      <div>Goodjob Point</div>
    </div>
    {users.map((u) => (
      <div key={u.id} className={tableBody}>
        <div>{u.name}</div>
        <div className={countCell}>
          <HandThumbUpIcon className={icon} /> x {u.goodjob.count}
        </div>
        <div className={countCell}>
          <CurrencyDollarIcon className={icon} /> x {u.goodjob.point}
        </div>
      </div>
    ))}
  </div>
);
