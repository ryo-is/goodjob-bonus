import { UsersTable } from '@/components/pages/index/UsersTable';
import { trpc } from '@/utils/trpc';
import { button } from './index.css';

export const Index = () => {
  const userList = trpc.userList.useQuery();
  const user = trpc.userById.useQuery({ id: '00001' });
  const sendBonus = trpc.sendBonus.useMutation();

  console.log({ userList: userList.data, user: user.data });

  const onClick = () => {
    sendBonus.mutate({ id: '00001', point: 10 });
  };

  return (
    <div>
      <UsersTable users={userList.data ?? []} />
      <div>
        <button type="button" className={button} onClick={onClick}>
          POST
        </button>
      </div>
    </div>
  );
};
