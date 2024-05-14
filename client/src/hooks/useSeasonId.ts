import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useSeasonId = () => {
  const [params] = useSearchParams();

  const seasonId = useMemo(() => params.get('searsonId'), [params]);

  return { seasonId };
};
