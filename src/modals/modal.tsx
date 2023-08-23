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
  renderChildren: ({ close }: { close: () => void }) => ReactNode;
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

  //Modal.setAppElement('#__next');

  const renderCloseIcon = (
    <Flex
      css={{
        position: 'absolute',
        top: '1px',
        right: '1px',
      }}
    >
      <Button
        href="#"
        onClick={() => modalClose()}
        size="small"
        css={{
          backgroundColor: '$background',
          borderWidth: '0px',
          color: '$neutral400',
          boxShadow: '0px',
          borderRadius: '$3',

          '&:hover': {
            backgroundColor: '$neutral400',
            color: '$white',
          },
        }}
      >
        <FontAwesomeIcon icon={faCircleXmark} />
      </Button>
    </Flex>
  );

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
        <Card
          css={{
            color: '$neutral700',
            maxWidth: '550px',
            minHeight: '33vh',
            alignItems: 'center',
            justifyContent: 'center',

            '@sm': {
              maxWidth: '300px',
            },
          }}
        >
          {showCloseIcon && renderCloseIcon}
          <Flex
            column
            wrap
            css={{ alignItems: 'center', justifyContent: 'center' }}
          >
            {renderChildren({ close: modalClose })}
          </Flex>
        </Card>
      </Modal>
    </>
  );
};
