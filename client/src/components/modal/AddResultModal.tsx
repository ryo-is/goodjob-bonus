/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';

import {
  container,
  modal,
  overlay,
  hiddenContaier,
  createButton,
  cancelButton,
  actionArea,
  modalTitle,
  inputArea,
  inputRow,
  input,
  select,
} from './AddResultModal.css';

import { useModalIsOpen } from '@/store/modal';
import { trpc } from '@/utils/trpc';

export const AddResultModal = () => {
  const [selectedSeasonId, setSelectedSeasonId] = useState<number>();
  const [selectedUserId, setSelectedUserId] = useState<number>();
  const [rank, setRank] = useState(0);
  const [point, setPoint] = useState(0);

  const { isOpen, setIsOpen } = useModalIsOpen();

  const users = trpc.users.useQuery();
  const seasons = trpc.seasons.useQuery();
  const addResult = trpc.addResult.useMutation();

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

  if (!isOpen) return <div className={hiddenContaier} />;

  return (
    <div className={container}>
      <div className={modal}>
        <div className={modalTitle}>Add Result</div>
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
          <button
            type="button"
            className={cancelButton}
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
      <div className={overlay} onClick={() => setIsOpen(false)} />
    </div>
  );
};
