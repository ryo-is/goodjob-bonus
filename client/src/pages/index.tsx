import { UsersTable } from '@/components/pages/index/UsersTable';
import { trpc } from '@/utils/trpc';

export const Index = () => {
  const users = trpc.users.useQuery();
  const results = trpc.results.useQuery({ seasonId: '1' });
  console.log(results);

  return (
    <div>
      <UsersTable users={users.data ?? []} />
    </div>
  );
};
