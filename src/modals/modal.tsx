import Modal from 'react-modal';
import { Card, Flex } from '../layout';
import { ReactNode, useEffect, useState } from 'react';
import { FormButton } from '../buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
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
  /** Additional modal Card CSS */
  css?: object;
  contentCss?: object;
}

/** A Reusable Modal Component for Revolancer UI library */
export const RevoModal = ({
  openOnTrigger = true,
  showModalOpenCTA = false,
  showCloseIcon = false,
  renderChildren,
  onClose,
  renderCTA,
  css = {},
  contentCss = {},
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

  const renderCloseIcon = (
    <Flex
      css={{
        width: '100%',
        height: '$2',
      }}
    >
      <FormButton
        onClick={() => {
          if (onClose) {
            onClose();
            modalClose();
          } else {
            modalClose();
          }
        }}
        css={{
          backgroundColor: '$background',
          borderWidth: '0px',
          color: '$neutral400',
          borderShadow: '$0',
          boxShadow: '$0',
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
      </FormButton>
    </Flex>
  );

  const renderOpenModal = renderCTA
    ? renderCTA({ open: modalOpen })
    : showModalOpenCTA && (
        <FormButton role="primary" onClick={() => modalOpen()}>
          Open
        </FormButton>
      );

  return (
    <>
      {renderOpenModal}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          if (onClose) {
            onClose();
            modalClose();
          } else {
            modalClose();
          }
        }}
        style={customStyles}
      >
        <Card
          css={{
            color: '$neutral700',
            alignItems: 'center',
            justifyContent: 'center',
            ...css,
          }}
        >
          {showCloseIcon && renderCloseIcon}
          <Flex
            column
            wrap
            css={{
              alignItems: 'center',
              justifyContent: 'center',
              ...contentCss,
            }}
          >
            {renderChildren({ close: modalClose })}
          </Flex>
        </Card>
      </Modal>
    </>
  );
};
