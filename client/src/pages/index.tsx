import { UsersTable } from '@/components/pages/index/UsersTable';
import { trpc } from '@/utils/trpc';

export const Index = () => {
  const userList = trpc.userList.useQuery();
  const user = trpc.userById.useQuery({ id: '00001' });

  console.log({ userList: userList.data, user: user.data });

  return (
    <div>
      <UsersTable users={userList.data ?? []} />
    </div>
  );
};
