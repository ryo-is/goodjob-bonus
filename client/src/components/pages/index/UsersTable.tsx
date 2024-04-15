import { tableBody, tableHeader } from './UsersTable.css';

const users = [
  {
    id: '1',
    name: '田中 太郎',
    goodjob: {
      count: 10,
      point: 20,
    },
  },
  {
    id: '2',
    name: '山田花子',
    goodjob: {
      count: 10,
      point: 20,
    },
  },
];

export const UsersTable = () => (
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
