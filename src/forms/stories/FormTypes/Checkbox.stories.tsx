import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, Form } from '../..';
import { Formik } from 'formik';
import { useState } from 'react';
import { Card, Divider, Flex } from '../../../layout';
import { H3, H4, H5, P, Span } from '../../../text';
import { FormButton } from '../../../buttons';
import { RevoModal } from '../../../modals';

const meta = {
  title: 'Forms/FormTypes/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'Checkbox' },
      },
    },
    children: {},
    id: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'Checkbox-1' },
      },
    },
    defaultChecked: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    checked: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  render: ({ checked, ...args }) => {
    const [confirmed, setConfirm] = useState(false);
    const submitHandler = (val: boolean, close: () => void) => {
      setConfirm(val);
      close();
    };
    return (
      <>
        <Formik
          initialValues={{
            confirm: false,
          }}
          onSubmit={({ confirm }) => submitHandler(confirm, close)}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <Flex column>
                <Card css={{ width: '33vw' }}>
                  <H3>Form Component</H3>
                  <Divider />
                  <P>
                    The form component is a styled nesting component for all
                    your other form components when creating form for your
                    project.
                    <br />
                    <br />
                    Make sure to wrap this in a Formik component and is rendered
                    through Formik's render props.
                  </P>
                </Card>
              </Flex>
              <Checkbox checked={checked} {...args} />
              <FormButton type="submit">Submit</FormButton>
            </Form>
          )}
        </Formik>
        <RevoModal
          openOnTrigger={confirmed}
          renderChildren={({ close }) => {
            return (
              <Card>
                <Flex column wrap>
                  <H4>Data Submitted!</H4>
                  <H5>Here's your submission:</H5>
                  <Divider />
                  <Span>confirmed: {confirmed ? 'true' : 'false'}</Span>
                  <FormButton
                    size="small"
                    onClick={() => {
                      setConfirm(false);
                      close();
                    }}
                  >
                    CLOSE
                  </FormButton>
                </Flex>
              </Card>
            );
          }}
        />
      </>
    );
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Checkbox',
    id: 'chkbx1',
    defaultChecked: false,
    checked: false,
    required: false,
  },
};
