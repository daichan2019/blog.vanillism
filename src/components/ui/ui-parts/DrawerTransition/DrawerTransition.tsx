import { Dialog, Transition } from '@headlessui/react';
import type { FC, ReactNode } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const DrawerTransition: FC<Props> = ({ children, isOpen, onClose }) => {
  return (
    <Transition show={isOpen}>
      <Dialog className='fixed inset-0 z-40 overflow-hidden lg:hidden' onClose={onClose}>
        <Transition.Child
          enter='transition-opacity ease-in-out duration-250'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-in-out duration-250'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='bg-opacity-40 z-30 bg-gray-500 fixed inset-0' />
        </Transition.Child>
        <Transition.Child
          className='absolute inset-0 z-40 flex left-auto'
          enter='transition ease duration-250 transform'
          enterFrom='-translate-x-0'
          enterTo='translate-x-0'
          leave='transition ease duration-250 transform'
          leaveFrom='translate-x-0'
          leaveTo='translate-x-full'
        >
          <Dialog.Panel className='min-w-[200px] bg-white py-6 px-4 flex-1 border-l overflow-hidden shadow-xl transition-all w-full max-w-sm'>
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
