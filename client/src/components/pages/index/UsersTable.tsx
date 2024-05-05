import { tableBody, tableHeader } from './UsersTable.css';

import { RouterOutputs } from '@/utils/trpc';

type UsersTableProps = {
  results: RouterOutputs['resultSummary'];
};

export const UsersTable = ({ results }: UsersTableProps) => (
  <div>
    <div className={tableHeader}>
      <div>Name</div>
      <div>Total Point</div>
      <div>Average Rank</div>
    </div>
    {Object.entries(results).map(([id, value]) => (
      <div key={id} className={tableBody}>
        <div>{value.userName}</div>
        <div>{value.totalPoint}</div>
        <div>{value.averageRnak}</div>
      </div>
    ))}
  </div>
);
