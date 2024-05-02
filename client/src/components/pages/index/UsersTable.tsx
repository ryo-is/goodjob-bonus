import { tableBody, tableHeader, countCell } from './UsersTable.css';

import { RouterOutputs } from '@/utils/trpc';

type UsersTableProps = {
  users: RouterOutputs['userList'];
};

export const UsersTable = ({ users }: UsersTableProps) => (
  <div>
    <div className={tableHeader}>
      <div>Name</div>
      <div>Total Point</div>
      <div>Mean Rank</div>
    </div>
    {users.map((u) => (
      <div key={u.id} className={tableBody}>
        <div>{u.name}</div>
        <div className={countCell}>{u.totalPoint}</div>
        <div className={countCell}>{u.meanRank}</div>
      </div>
    ))}
  </div>
);
