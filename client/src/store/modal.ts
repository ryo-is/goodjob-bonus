import { atom, useAtom } from 'jotai';

export const editorModalIsOpen = atom<boolean>(false);

export const useModalIsOpen = () => {
  const [isOpen, setIsOpen] = useAtom(editorModalIsOpen);

  return {
    isOpen,
    setIsOpen,
  };
};
