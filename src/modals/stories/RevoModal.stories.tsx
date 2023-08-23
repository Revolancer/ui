import type { Meta } from '@storybook/react';
import { RevoModal as Modal } from '..';
import { Button } from '../../buttons';
import { H3, P } from '../../text';
import { useState } from 'react';
import { Flex } from '../../layout';

const meta = {
  title: 'Modals/RevoModal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;

export const Default = () => {
  return (
    <>
      <Flex css={{ minHeight: '20vh' }}>
        <H3>Refresh or re-mount the component to view the modal again!</H3>
      </Flex>
      <Modal
        renderChildren={({ close }) => {
          return (
            <Flex
              column
              css={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Flex>
                <P>THE MODAL IS OPEN</P>
              </Flex>
              <Flex>
                <Button
                  role="primary"
                  href="#"
                  size="small"
                  onClick={() => close()}
                >
                  Close Modal
                </Button>
              </Flex>
            </Flex>
          );
        }}
      />
    </>
  );
};

export const WithCloseIcon = () => {
  return (
    <>
      <Flex css={{ minHeight: '20vh' }}>
        <H3>Refresh or re-mount the component to view the modal again!</H3>
      </Flex>
      <Modal
        showCloseIcon
        renderChildren={({ close }) => {
          return (
            <>
              <Flex>
                <P>THE MODAL IS OPEN AND THERE'S NO ESCAPE!</P>
              </Flex>
            </>
          );
        }}
      />
    </>
  );
};

export const WithOpenModalCTA = () => {
  return (
    <>
      <Flex css={{ minHeight: '20vh' }}>
        <H3>PRESS HIM</H3>
      </Flex>
      <Modal
        showModalOpenCTA
        modalCTALabel="PRESS ME"
        renderChildren={({ close }) => {
          return (
            <>
              <Flex>
                <P>THE MODAL IS OPEN</P>
              </Flex>
              <Flex>
                <Button
                  role="primary"
                  href="#"
                  size="small"
                  onClick={() => close()}
                >
                  Close Modal
                </Button>
              </Flex>
            </>
          );
        }}
      />
    </>
  );
};

// sample case of a component using the reusable modal and how to use renderProps
export const CTAWithHandleSubmit = () => {
  const [submitHandled, setSubmitHandled] = useState(false);
  // create your handleSubmit button with close as an argument with a function type, this will be referred to by the modal to perform its modalClose function
  const handleSubmit = (close: () => void) => {
    setSubmitHandled(!submitHandled);
    close();
  };
  return (
    <>
      <Flex css={{ minHeight: '20vh' }}>
        <H3>Submit Status: {submitHandled ? 'Handled' : ''}</H3>
      </Flex>
      <Modal
        showModalOpenCTA
        modalCTALabel={submitHandled ? 'un-handle submit' : 'handle submit'}
        renderChildren={({ close }) => {
          // your return statement can be whatever JSX you plan on using, just make sure CTAs include calling the handleSubmit function defined earlier
          return (
            <>
              <Flex>
                <P>THE MODAL IS OPEN</P>
              </Flex>
              <Flex
                wrap
                css={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button
                  role="primary"
                  href="#"
                  size="small"
                  onClick={() => handleSubmit(close)}
                >
                  Close and Submit
                </Button>
                <Button
                  role="secondary"
                  href="#"
                  size="small"
                  onClick={() => close()}
                >
                  Close
                </Button>
              </Flex>
            </>
          );
        }}
      />
    </>
  );
};
