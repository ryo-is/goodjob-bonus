import { container } from './FloatButton.css';

import { useModalIsOpen } from '@/store/modal';

type Props = {
  label: string;
};

export const FloatButton = ({ label }: Props) => {
  const { setIsOpen } = useModalIsOpen();

  return (
    <button type="button" className={container} onClick={() => setIsOpen(true)}>
      {label}
    </button>
  );
};
