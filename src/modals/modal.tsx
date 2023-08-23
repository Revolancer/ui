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
  showModalOpenCTA = false,
  modalCTALabel = 'Show Modal',
  showCloseIcon = false,
  renderChildren,
}: {
  showModalOpenCTA?: boolean;
  modalCTALabel?: string;
  showCloseIcon?: boolean;
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
    if (!showModalOpenCTA) modalOpen();
  }, [showModalOpenCTA]);

  Modal.setAppElement('#__next');

  return (
    <>
      {showModalOpenCTA && (
        <Button role="primary" href="#" onClick={() => modalOpen()}>
          {modalCTALabel}
        </Button>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => modalClose()}
        style={customStyles}
      >
        <Card css={{ color: '$neutral700', maxWidth: '550px' }}>
          {showCloseIcon && (
            //i gotta fix the css for this lol
            <Button role="primary" href="#" onClick={() => modalClose()}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </Button>
          )}
          <Flex css={{ alignItems: 'center', justifyContent: 'space-between' }}>
            {renderChildren({ close: modalClose })}
          </Flex>
        </Card>
      </Modal>
    </>
  );
};
