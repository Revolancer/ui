import Modal from 'react-modal';
import { Button } from '../buttons';
import { Card, Flex } from '../layout';
import { ReactNode } from 'react';

const customStyles: Modal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'none',
    border: 'none',
    overflow: 'visible',
    padding: '0',
  },
};

export const RevoModal = ({
  modalIsOpen,
  handleClose,
  renderCTA,
  renderClose = () => {},
  children,
}: {
  modalIsOpen: boolean;
  handleClose: () => void;
  renderCTA?: () => void;
  renderClose: () => void;
  children?: ReactNode;
}) => {
  Modal.setAppElement('#__next');
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleClose}
        style={customStyles}
      >
        <Card css={{ color: '$neutral700', maxWidth: '550px' }}>
          <Flex css={{ alignItems: 'center', justifyContent: 'space-between' }}>
            {children}
          </Flex>
        </Card>
      </Modal>
    </>
  );
};
