import { AddResult } from '@/components/pages/index/AddResult';
import { UsersTable } from '@/components/pages/index/UsersTable';
import { useSeasonId } from '@/hooks/useSeasonId';
import { trpc } from '@/utils/trpc';

export const Index = () => {
  const { seasonId } = useSeasonId();

  const resultSummary = trpc.resultSummary.useQuery({
    seasonId: seasonId ?? '1',
  });

  const refetch = async () => {
    await resultSummary.refetch();
  };

  return (
    <div>
      <AddResult refetch={refetch} />
      <UsersTable results={resultSummary.data ?? {}} />
    </div>
  );
};
