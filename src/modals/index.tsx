import Modal from 'react-modal';
import { Card, Flex } from '../layout';
import { ReactNode, useEffect, useState } from 'react';
import { Button } from '../buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

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
  showCloseIcon = false,
  renderChildren,
}: {
  showCloseIcon: boolean;
  renderChildren: ({ close }: { close: any }) => ReactNode;
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const modalOpen = () => {
    setIsOpen(true);
  };
  const modalClose = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    modalOpen();
  }, []);
  Modal.setAppElement('#__next');
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={modalClose}
      style={customStyles}
    >
      <Card css={{ color: '$neutral700', maxWidth: '550px' }}>
        {showCloseIcon && (
          <Button role="primary" href="#" onClick={() => modalClose()}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </Button>
        )}
        <Flex css={{ alignItems: 'center', justifyContent: 'space-between' }}>
          {renderChildren({ close: modalClose })}
        </Flex>
      </Card>
    </Modal>
  );
};
