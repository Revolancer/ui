import type { Meta, StoryObj } from '@storybook/react';
import { Radio, Form, RadioItem } from '../..';
import { Formik } from 'formik';
import { useState } from 'react';
import { Card, Divider, Flex } from '../../../layout';
import { H3, H4, H5, P, Span } from '../../../text';
import { FormButton } from '../../../buttons';
import { RevoModal } from '../../../modals';

const meta = {
  title: 'Forms/FormTypes/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'Radio' },
      },
    },
    children: {},
    id: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'Radio-1' },
      },
    },
    defaultValue: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: '1' },
      },
    },
    value: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: '1' },
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
    const values = ['Test', 'Quiz', 'Challenge'];
    return (
      <>
        <Formik
          initialValues={{
            choice: 'Test',
          }}
          onSubmit={({ choice }) => submitHandler(choice, close)}
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
                    Make sure to use this component inside the Form component as
                    the checkbox uses Formik's useFormikContext custom hook.
                  </P>
                </Card>
              </Flex>
              <Flex css={{ alignItems: 'center' }}>
                <Radio
                  id="radio"
                  name="choice"
                  defaultValue="Test"
                  value={props.values.choice}
                >
                  {values.map((value) => (
                    <RadioItem value={value} label={value} divide />
                  ))}
                </Radio>
              </Flex>
              <FormButton type="submit">Submit</FormButton>
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
                  <Span>Choice: {data}</Span>
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
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'radio',
    id: 'radio-1',
    defaultValue: 'Test',
    value: 'Test',
  },
};
