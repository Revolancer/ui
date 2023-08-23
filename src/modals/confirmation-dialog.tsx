import { config as styleconfig } from '../styles';
import Modal from 'react-modal';
import { Button, UnstyledLink } from '../buttons';
import { useState } from 'react';
import { Flex } from '../layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { H4, P } from '../text';

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
    paddingBlock: styles.sizes[3],
    maxWidth: 'min(640px, 85vw)',
    minWidth: '340px',
    width: '100%',
  },
};

export const ConfirmationDialog = ({
  onAccept,
  onReject,
  confirmationMessage = 'Are you sure you want to do that?',
  labelAccept = 'Confirm',
  labelReject = 'Cancel',
  dangerous = false,
  label,
  title = 'Are you sure?',
}: {
  label: string;
  onAccept: () => void;
  onReject?: () => void;
  title?: string;
  confirmationMessage?: string;
  labelAccept?: string;
  labelReject?: string;
  dangerous?: boolean;
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const acceptHandler = () => {
    onAccept();
  };
  const rejectHandler = () => {
    if (onReject) {
      onReject();
    }
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  Modal.setAppElement('#__next');
  return (
    <>
      <Button
        role={dangerous ? 'dangerous' : 'primary'}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          openModal();
        }}
      >
        {label}
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          rejectHandler();
          closeModal();
        }}
        style={customStyles}
        contentLabel={title}
      >
        <Flex column>
          <Flex css={{ justifyContent: 'space-between' }}>
            <H4>{title}</H4>
            <UnstyledLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                rejectHandler();
                closeModal();
              }}
              css={{ fontSize: '$h5' }}
            >
              <FontAwesomeIcon icon={faClose} />
            </UnstyledLink>
          </Flex>
          <P>{confirmationMessage}</P>
          <Flex>
            <Button
              role={dangerous ? 'dangerous' : 'primary'}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                acceptHandler();
                closeModal();
              }}
            >
              {labelAccept}
            </Button>
            <Button
              role="secondary"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                rejectHandler();
                closeModal();
              }}
            >
              {labelReject}
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};
