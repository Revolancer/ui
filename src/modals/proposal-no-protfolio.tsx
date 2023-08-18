//import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { P } from '../text';
import { Card, Flex } from '../layout';
import { Button, TertiaryButton, UnstyledLink } from '../buttons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClose } from '@fortawesome/free-solid-svg-icons';

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

export const ProposalNoPortfolioModal = ({
  onClose = () => {},
}: {
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
    openModal();
  }, []);
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
            <strong>🚀 Increase your chances of landing this project</strong>
          </P>
          <UnstyledLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              closeModal();
            }}
            css={{ color: '$neutral600' }}
          >
            {/*<FontAwesomeIcon icon={faClose} />*/}
          </UnstyledLink>
        </Flex>
        <P>
          Great work on sending a proposal! There&rsquo;s one thing though...
          <br />
          We&rsquo;ve noticed you haven&rsquo;t posted anything to your
          portfolio yet.
        </P>
        <P>
          <strong>
            Users who add examples of their work to their portfolios have a 30%
            higher chance of landing projects.
          </strong>{' '}
          Add yours now!
        </P>
        <Flex gap="5" css={{ alignItems: 'center' }}>
          <Button href="/portfolio/new">Add Portfolio Post</Button>
          <TertiaryButton
            href="#"
            onClick={(e) => {
              e.preventDefault();
              closeModal();
            }}
          >
            No, thanks
          </TertiaryButton>
        </Flex>
      </Card>
    </Modal>
  );
};
