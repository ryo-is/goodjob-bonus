import { useState } from 'react';

import {
  container,
  contents,
  summary,
  inputArea,
  inputRow,
  select,
  input,
  actionArea,
  createButton,
} from './AddResult.css';

import { trpc } from '@/utils/trpc';

type Props = {
  refetch: () => Promise<void>;
};

export const AddResult = ({ refetch }: Props) => {
  const [selectedSeasonId, setSelectedSeasonId] = useState<number>();
  const [selectedUserId, setSelectedUserId] = useState<number>();
  const [rank, setRank] = useState(0);
  const [point, setPoint] = useState(0);

  const users = trpc.users.useQuery();
  const seasons = trpc.seasons.useQuery();
  const addResult = trpc.addResult.useMutation({
    onSuccess: async () => {
      await refetch();
    },
  });

  const onCreate = () => {
    if (!selectedSeasonId || !selectedUserId) {
      return;
    }

    addResult.mutate({
      seasonId: selectedSeasonId,
      userId: selectedUserId,
      rank,
      point,
    });
  };

  return (
    <div className={container}>
      <details open>
        <summary className={summary}>Add Result</summary>
        <div className={contents}>
          <div className={inputArea}>
            <div className={inputRow}>
              <div>seasons</div>
              <select
                className={select}
                onChange={(e) => setSelectedSeasonId(Number(e.target.value))}
              >
                <option>Select Season</option>
                {seasons.data &&
                  seasons.data.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className={inputRow}>
              <div>user</div>
              <select
                className={select}
                onChange={(e) => setSelectedUserId(Number(e.target.value))}
              >
                <option>Select User</option>
                {users.data &&
                  users.data.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className={inputRow}>
              <div>rank</div>
              <input
                className={input}
                type="number"
                defaultValue={rank}
                onChange={(e) => setRank(Number(e.target.value))}
              />
            </div>
            <div className={inputRow}>
              <div>point</div>
              <input
                className={input}
                type="number"
                defaultValue={point}
                onChange={(e) => setPoint(Number(e.target.value))}
              />
            </div>
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
