import { config as styleconfig } from '../styles';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { P } from '../text';

const styles = styleconfig.theme;

const customStyles: Modal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: styles.radii[2],
    paddingInline: styles.sizes[6],
    paddingBlock: styles.sizes[6],
    maxWidth: 'min(500px, 85vw)',
    minWidth: '200px',
    width: '100%',
    backgroundColor: styles.colors.green500,
    color: styles.colors.white,
  },
};

export const SuccessModal = ({
  successMessage = 'Complete',
  timeout = 3000,
  type = 'success',
  onClose = () => {},
}: {
  successMessage?: string;
  timeout?: number;
  type?: 'success';
  onClose?: () => void;
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };
  useEffect(() => {
    const closeModal = () => {
      setIsOpen(false);
      onClose();
    };
    const timeoutRef = setTimeout(closeModal, timeout);
    openModal();
    return () => {
      clearTimeout(timeoutRef);
    };
  }, [timeout, onClose]);
  Modal.setAppElement('#__next');
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <P>{successMessage}</P>
    </Modal>
  );
};
