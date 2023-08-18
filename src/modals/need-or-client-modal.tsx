import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { P } from '../text';
import { Card, Flex } from '../layout';
import { Button, Link } from '../buttons';

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

export const NeedOrClientModal = () => {
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
  Modal.setAppElement('#__next');
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={() => {}} style={customStyles}>
      <Card css={{ color: '$neutral700', maxWidth: '550px' }}>
        <P>
          <strong>✋ Post a Need or Find Clients?</strong>
        </P>
        <P>
          Needs are intended for seeking help from our community, not for
          promoting your own services/ looking for work. Do you want to post a
          Need? Or are you looking for a client?
        </P>
        <Flex gap="5" css={{ alignItems: 'center' }}>
          <Button
            role="secondary"
            href="https://revolancer.com/magazine/get-clients/"
          >
            Find Clients
          </Button>
          <Button
            role="secondary"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              closeModal();
            }}
          >
            Post a Need
          </Button>
        </Flex>
        <P css={{ color: '$neutral600' }}>
          💡 Need some help? Check out our{' '}
          <Link
            href="https://support.revolancer.com/hc/en-gb/articles/11727216855837-How-to-post-a-Need"
            target="_blank"
          >
            guide
          </Link>{' '}
          on Needs.
        </P>
      </Card>
    </Modal>
  );
};
