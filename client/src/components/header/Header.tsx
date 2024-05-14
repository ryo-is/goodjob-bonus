import { useCallback } from 'react';

import { container } from './Header.css';

import { useSeasonId } from '@/hooks/useSeasonId';
import { trpc } from '@/utils/trpc';

export const Header = () => {
  const seasons = trpc.seasons.useQuery();

  const { seasonId } = useSeasonId();

  const selectedSeasonName = useCallback(() => {
    if (!seasons.data || !seasonId) {
      return '';
    }
    return seasons.data.find((s) => s.id === Number(seasonId))?.name ?? '';
  }, [seasonId, seasons.data]);

  return (
    <div className={container}>
      <div>{selectedSeasonName()}</div>
    </div>
  );
};
