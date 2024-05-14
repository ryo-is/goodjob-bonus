import { useState } from 'react';

import {
  container,
  contents,
  summary,
  actionArea,
  createButton,
  hiddenContent,
  inputArea,
  input,
  inputRow,
} from './AddResult.css';

import { useSeasonId } from '@/hooks/useSeasonId';
import { trpc, RouterInputs } from '@/utils/trpc';

type Props = {
  refetch: () => Promise<void>;
};

export const AddResult = ({ refetch }: Props) => {
  const { seasonId } = useSeasonId();

  const [rankMap, setRankMap] = useState(new Map<number, number>());
  const [pointMAp, setPointMap] = useState(new Map<number, number>());

  const users = trpc.users.useQuery();
  const bulkAddResult = trpc.bulkAddResult.useMutation({
    onSuccess: async () => {
      await refetch();
    },
  });

  const onCreate = () => {
    if (!users.data) {
      return;
    }

    let totalRank = 0;
    let totalPoint = 0;
    const inputs: RouterInputs['bulkAddResult'] = users.data.map((u) => {
      const rank = rankMap.get(u.id) ?? 0;
      const point = pointMAp.get(u.id) ?? 0;
      totalRank += rank;
      totalPoint += point;

      return {
        userId: u.id,
        seasonId: Number(seasonId),
        rank,
        point,
      };
    });

    if (totalRank !== 10) {
      throw new Error('total rank is not 10');
    }

    if (totalPoint !== 0) {
      throw new Error('total point is not 0');
    }

    bulkAddResult.mutate(inputs);
  };

  if (!users.data) {
    return <div className={hiddenContent} />;
  }

  return (
    <div className={container}>
      <details open>
        <summary className={summary}>Add Result</summary>
        <div className={contents}>
          <div className={inputArea}>
            <div className={inputRow}>
              <div />
              <div>rank</div>
              <div>point</div>
            </div>
            {users.data.map((u) => (
              <div key={u.id} className={inputRow}>
                <div>{u.name}</div>
                <div>
                  <input
                    className={input}
                    type="number"
                    defaultValue={0}
                    onChange={(e) =>
                      setRankMap((p) => p.set(u.id, Number(e.target.value)))
                    }
                  />
                </div>
                <div>
                  <input
                    className={input}
                    type="number"
                    defaultValue={0}
                    onChange={(e) =>
                      setPointMap((p) => p.set(u.id, Number(e.target.value)))
                    }
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={actionArea}>
            <button
              type="button"
              className={createButton}
              onClick={() => onCreate()}
            >
              Create
            </button>
          </div>
        </div>
      </details>
    </div>
  );
};
