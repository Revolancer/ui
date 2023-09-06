import type { Meta, StoryObj } from '@storybook/react';
import { RevoModal as Modal } from '..';
import { Button } from '../../buttons';
import { H3, P } from '../../text';
import { useState } from 'react';
import { Flex } from '../../layout';

const meta = {
  title: 'Modals/RevoModal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    showModalOpenCTA: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    modalCTALabel: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'Open Modal' },
      },
    },
    showCloseIcon: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    renderChildren: {},
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    openOnTrigger: true,
    showModalOpenCTA: false,
    modalCTALabel: '',
    showCloseIcon: false,
    renderChildren: ({ close }) => {
      return (
        <Flex column css={{ justifyContent: 'center', alignItems: 'center' }}>
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
    },
  },
  render: (args) => {
    return (
      <>
        <Flex css={{ minHeight: '20vh' }}>
          <H3>Re-mount the component to view the modal again!</H3>
        </Flex>
        <Modal {...args} />
      </>
    );
  },
};

export const WithCloseIcon: Story = {
  args: {
    ...Default.args,
    showCloseIcon: true,
    renderChildren: ({ close }) => {
      return (
        <>
          <Flex>
            <P>THE MODAL IS OPEN AND THERE'S NO ESCAPE!</P>
          </Flex>
        </>
      );
    },
  },
  render: (args) => {
    return (
      <>
        <Flex css={{ minHeight: '20vh' }}>
          <H3>Re-mount the component to view the modal again!</H3>
        </Flex>
        <Modal {...args} />
      </>
    );
  },
};

export const WithOpenModalCTA: Story = {
  args: {
    ...Default.args,
    openOnTrigger: false,
    showModalOpenCTA: true,
    modalCTALabel: 'PRESS ME',
    renderChildren: ({ close }) => {
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
    },
  },
  render: (args) => {
    return (
      <>
        <Flex css={{ minHeight: '20vh' }}>
          <H3>PRESS HIM</H3>
        </Flex>
        <Modal {...args} />
      </>
    );
  },
};

/** sample case of a component using the reusable modal and how to use renderProps */
export const CTAWithHandleSubmit: Story = {
  args: {
    ...Default.args,
    openOnTrigger: false,
    showModalOpenCTA: true,
  },
  render: (args) => {
    const [submitHandled, setSubmitHandled] = useState(false);
    // create your handleSubmit button with close as an argument with a function type, this will be referred to by the modal to perform its modalClose function
    const handleSubmit = (close: () => void) => {
      setSubmitHandled(!submitHandled);
      close();
    };
    return (
      <>
        <Flex column css={{ minHeight: '20vh' }}>
          <H3>Submit Status: {submitHandled ? 'Handled' : ''}</H3>
          <P>
            create your handleSubmit button with close as an argument with a
            function type, this will be referred to by the modal to perform its
            modalClose function
          </P>
        </Flex>
        <Modal
          {...args}
          modalCTALabel={submitHandled ? 'un-handle submit' : 'handle submit'}
          renderChildren={({ close }) => {
            // your return statement can be whatever JSX you plan on using, just make sure CTAs include calling the handleSubmit function defined earlier
            return (
              <>
                <Flex>
                  <P>
                    your return statement can be whatever JSX you plan on using,
                    just make sure CTAs include calling the handleSubmit
                    function defined earlier
                  </P>
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
  },
};

export const OpenOnTrigger: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    const [count, setCount] = useState(0);
    const maxCount = 5;

    const handleClose = (close: () => void) => {
      setCount(count - 1);
      close();
    };

    return (
      <Flex column>
        <H3>COUNT: {count}</H3>
        <Button
          role="primary"
          href="#"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          ADD
        </Button>
        <Modal
          {...args}
          openOnTrigger={count > maxCount}
          renderChildren={({ close }) => {
            return (
              <>
                <P>Count exceeded!</P>
                <Button
                  role="primary"
                  href="#"
                  onClick={() => handleClose(close)}
                >
                  Fix Count
                </Button>
              </>
            );
          }}
        />
      </Flex>
    );
  },
};
