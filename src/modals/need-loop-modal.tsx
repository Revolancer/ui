//import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { P, Span } from '../text';
import { Card, Flex } from '../layout';
import { Button, TertiaryButton, UnstyledLink } from '../buttons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleCheck, faClose } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

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

export const NeedLoopModal = ({ nextUrl }: { nextUrl: string }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    openModal();
  }, []);
  const router = useRouter();
  Modal.setAppElement('#__next');
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <Card css={{ color: '$neutral700', maxWidth: '550px' }}>
        <Flex css={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <P>
            <strong>
              <Span css={{ color: '$green500' }}>
                {/*<FontAwesomeIcon icon={faCircleCheck} />*/}
              </Span>{' '}
              Need posted!
            </strong>
          </P>
          <UnstyledLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              closeModal();
              router.replace(nextUrl);
            }}
            css={{ color: '$neutral600' }}
          >
            {/*<FontAwesomeIcon icon={faClose} />*/}
          </UnstyledLink>
        </Flex>
        <P>Do you need anything else?</P>
        <Flex gap="5" css={{ alignItems: 'center' }}>
          <Button href="/need/new">Add Need</Button>
          <TertiaryButton
            href="#"
            onClick={(e) => {
              e.preventDefault();
              closeModal();
              router.replace(nextUrl);
            }}
          >
            No, thanks
          </TertiaryButton>
        </Flex>
      </Card>
    </Modal>
  );
};
