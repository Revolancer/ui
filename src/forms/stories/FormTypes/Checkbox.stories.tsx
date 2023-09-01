import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, Form, InputInner, InputOuter } from '../..';
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
  render: () => {
    const [data, setData] = useState('');
    const submitHandler = (dataSet: string, close: () => void) => {
      setData(dataSet);
      close();
    };
    return (
      <>
        <Formik
          initialValues={{
            name: 'Stacy Fakename',
            confirmed: false,
          }}
          onSubmit={({ name }) => submitHandler(name, close)}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <Flex column>
                <Card css={{ width: '33vw' }}>
                  <H3>Form Component</H3>
                  <Divider />
                  <P>
                    The checkbox component is a styled component for
                    confirmation actions (e.g. confirming profile changes or
                    permanently deleting accounts) when creating forms for your
                    project.
                    <br />
                    <br />
                    Make sure to wrap this in a Formik component and is rendered
                    through Formik's render props.
                  </P>
                </Card>
              </Flex>
              <InputOuter>
                <InputInner
                  name="name"
                  value={props.values.name}
                  onChange={props.handleChange}
                />
              </InputOuter>
              <Flex css={{ alignItems: 'center' }}>
                <Checkbox name="confirmed" checked={props.values.confirmed}>
                  I have read and accepted the terms and conditions
                </Checkbox>
              </Flex>
              <FormButton type="submit" disabled={!props.values.confirmed}>
                Submit
              </FormButton>
            </Form>
          )}
        </Formik>
        <RevoModal
          openOnTrigger={data !== ''}
          renderChildren={({ close }) => {
            return (
              <Card>
                <Flex column wrap>
                  <H4>Data Submitted!</H4>
                  <H5>Here's your submission:</H5>
                  <Divider />
                  <Span>name: {data}</Span>
                  <FormButton
                    size="small"
                    onClick={() => {
                      setData('');
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
