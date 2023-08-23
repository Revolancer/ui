import type { Meta } from '@storybook/react';
import { RevoModal as Modal } from '..';
import { Button } from '../../buttons';
import { H1, P } from '../../text';
import { useState } from 'react';

const meta = {
  title: 'Modals/RevoModal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;

// sample case of a component using the reusable modal and how to use renderProps
export const Default = () => {
  const [submitHandled, setSubmitHandled] = useState(false);
  // create your handleSubmit button with close as an argument with a function type, this will be referred to by the modal to perform its modalClose function
  const handleSubmit = (close: () => void) => {
    setSubmitHandled(!submitHandled);
    close();
  };
  return (
    <>
      {submitHandled && <H1>BWOAH Submit Handled</H1>}
      <Modal
        showModalOpenCTA
        renderChildren={({ close }) => {
          // your return statement can be whatever JSX you plan on using, just make sure CTAs include calling the handleSubmit function defined earlier
          return (
            <>
              <P>THE MODAL IS OPEN</P>
              <Button
                role="primary"
                href="#"
                onClick={() => handleSubmit(close)}
              >
                Close Modal with Submit
              </Button>
              <Button role="secondary" href="#" onClick={() => close()}>
                Close Modal WITHOUT Submit
              </Button>
            </>
          );
        }}
      />
    </>
  );
};
