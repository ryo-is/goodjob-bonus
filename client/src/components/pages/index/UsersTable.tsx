import { tableBody, tableHeader } from './UsersTable.css';

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
        <div>👍 x {u.goodjob.count}</div>
        <div>💰 x {u.goodjob.point}</div>
      </div>
    ))}
  </div>
);
