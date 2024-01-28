import React from 'react';

interface ModalProps {
  open: boolean;
  className?: string;
  clickOutside?: boolean;
  onClose?: () => void;
}

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  open,
  children,
  className = '',
  clickOutside = false,
  onClose = () => {},
}) => {
  if (!open) {
    return null;
  }

  const handleClickOutside = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (clickOutside) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleClickOutside}
      className="fixed top-0 left-0 w-screen h-screen backdrop-blur-lg bg-[#DBDBDB30] z-50"
    >
      <div
        className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] min-w-[30ch] max-w-[90%] min-h-[200px] bg-white dark:bg-gray-800 dark:text-white shadow-2xl rounded-md p-6 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
