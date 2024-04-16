import { UsersTable } from '@/components/pages/index/UsersTable';
import { trpc } from '@/utils/trpc';

export const Index = () => {
  const userList = trpc.userList.useQuery();

  return (
    <div>
      <UsersTable users={userList.data ?? []} />
    </div>
  );
};
