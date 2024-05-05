import { FloatButton } from '@/components/buttons/FloatButton';
import { AddResultModal } from '@/components/modal/AddResultModal';
import { UsersTable } from '@/components/pages/index/UsersTable';
import { trpc } from '@/utils/trpc';

export const Index = () => {
  const resultSummary = trpc.resultSummary.useQuery({ seasonId: '1' });

  return (
    <div>
      <UsersTable results={resultSummary.data ?? {}} />
      <FloatButton label="Add Result" />
      <AddResultModal />
    </div>
  );
};
