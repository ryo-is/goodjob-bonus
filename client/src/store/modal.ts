import { atom, useAtom } from 'jotai';

export const editorModalIsOpen = atom<boolean>(true);

export const useModalIsOpen = () => {
  const [isOpen, setIsOpen] = useAtom(editorModalIsOpen);

  return {
    isOpen,
    setIsOpen,
  };
};
