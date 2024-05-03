import { tableBody, tableHeader } from './UsersTable.css';

import { RouterOutputs } from '@/utils/trpc';

type UsersTableProps = {
  users: RouterOutputs['users'];
};

export const UsersTable = ({ users }: UsersTableProps) => (
  <div>
    <div className={tableHeader}>
      <div>Name</div>
      <div>Total Point</div>
      <div>Average Rank</div>
    </div>
    {users.map((u) => (
      <div key={u.id} className={tableBody}>
        <div>{u.name}</div>
      </div>
    ))}
  </div>
);
