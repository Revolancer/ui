import type { Meta, StoryObj } from '@storybook/react';
import { Form, Slider } from '../..';
import { Formik } from 'formik';
import { Card, Divider, Flex } from '../../../layout';
import { H3, H4, H5, P, Span } from '../../../text';
import { FormButton } from '../../../buttons';
import { RevoModal } from '../../../modals';
import { useState } from 'react';

const meta = {
  title: 'Forms/FormTypes/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    step: {
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: 1 },
      },
    },
    min: {
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: 0 },
      },
    },
    max: {
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: 100 },
      },
    },
    name: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'slider' },
      },
    },
  },
  render: (args) => {
    const [data, setData] = useState(0);
    const submitHandler = (val: number, close: () => void) => {
      setData(val);
      close();
    };
    return (
      <>
        <Formik
          initialValues={{
            val: 0,
          }}
          onSubmit={({ val }) => submitHandler(val, close)}
        >
          {(props) => (
            <Form {...props}>
              <Flex column>
                <Card css={{ width: '33vw' }}>
                  <H3>Slider Component</H3>
                  <Divider />
                  <P>
                    The slider component is a styled slider component used
                    inside of your Form component.
                    <br />
                    <br />
                    Make sure to use this inside a Form component as it uses
                    Field and FieldProps from Formik.
                  </P>
                </Card>
              </Flex>
              <Slider {...args} />
              <FormButton type="submit">Submit</FormButton>
            </Form>
          )}
        </Formik>
        <RevoModal
          openOnTrigger={data !== 0}
          renderChildren={({ close }) => {
            return (
              <Card>
                <Flex column wrap>
                  <H4>Data Submitted!</H4>
                  <H5>Here's your submission:</H5>
                  <Divider />
                  <Span>number: {data}</Span>
                  <FormButton
                    size="small"
                    onClick={() => {
                      setData(0);
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
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    step: 2,
    min: 0,
    max: 10,
    name: 'slider',
  },
};
