import Modal from 'react-modal';
import { Card, Flex } from '../layout';
import { ReactNode, useEffect, useState } from 'react';
import { Button } from '../buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

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

export interface ModalProps {
  /** Set a trigger to open the modal, set the prop to true to open on load */
  openOnTrigger?: boolean;
  /** Displays a default CTA to open the modal */
  showModalOpenCTA?: boolean;
  /** Displays the close icon in the modal */
  showCloseIcon?: boolean;
  /** Defines the child components in the modal, you can use handle functions from the parent component */
  renderChildren: ({ close }: { close: () => void }) => ReactNode;
  /** Defines the CTA */
  renderCTA?: ({ open }: { open: () => void }) => ReactNode;
  /** Custom handleclose function */
  onClose?: () => void;
}

/** A Reusable Modal Component for Revolancer UI library */
export const RevoModal = ({
  openOnTrigger = true,
  showModalOpenCTA = false,
  showCloseIcon = false,
  renderChildren,
  onClose,
  renderCTA,
}: ModalProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const modalOpen = () => {
    setIsOpen(true);
  };
  const modalClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (openOnTrigger) modalOpen();
  }, [openOnTrigger]);

  //Modal.setAppElement('#__next');

  const renderCloseIcon = (
    <Flex
      css={{
        width: '100%',
        height: '$2',
      }}
    >
      <Button
        href="#"
        onClick={() => {
          if (onClose) {
            onClose();
            modalClose();
            console.log('here');
          } else {
            modalClose();
            console.log('there');
          }
        }}
        css={{
          backgroundColor: '$background',
          borderWidth: '0px',
          color: '$neutral400',
          boxShadow: '0px',
          borderRadius: '$3',
          position: 'absolute',
          top: '3px',
          right: '3px',
          paddingBlock: '$0',
          paddingInline: '$2',

          '&:hover': {
            backgroundColor: '$neutral400',
            color: '$white',
          },
        }}
      >
        <FontAwesomeIcon icon={faXmark} />
      </Button>
    </Flex>
  );

  const renderOpenModal =
    showModalOpenCTA &&
    (renderCTA ? (
      renderCTA({ open: modalOpen })
    ) : (
      <Button role="primary" href="#" onClick={() => modalOpen()}>
        Open
      </Button>
    ));

  return (
    <>
      {renderOpenModal}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          if (onClose) {
            onClose();
            modalClose();
            console.log('here');
          } else {
            modalClose();
            console.log('there');
          }
        }}
        style={customStyles}
      >
        <Card
          css={{
            color: '$neutral700',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {showCloseIcon && renderCloseIcon}
          <Flex
            column
            wrap
            css={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {renderChildren({ close: modalClose })}
          </Flex>
        </Card>
      </Modal>
    </>
  );
};
