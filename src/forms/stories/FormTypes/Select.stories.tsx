import type { Meta, StoryObj } from '@storybook/react';
import { Form, Select, SelectGroup, SelectItem } from '../..';
import { useState } from 'react';
import { Formik } from 'formik';
import { Card, Divider, Flex } from '../../../layout';
import { H3, H4, H5, P, Span } from '../../../text';
import { RevoModal } from '../../../modals';
import { FormButton } from '../../../buttons';

const meta = {
  title: 'Forms/FormTypes/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: '' },
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: '' },
      },
    },
    children: {},
  },
  render: ({ name, placeholder, ...args }) => {
    const [currency, setCurrency] = useState('');
    const submitHandler = (dataSet: string, close: () => void) => {
      setCurrency(dataSet);
      close();
    };
    const items = {
      gbp: 'GBP £',
      usd: 'USD $',
      eur: 'EUR €',
    };
    return (
      <>
        <Formik
          initialValues={{
            currency: currency,
          }}
          onSubmit={({ currency }) => submitHandler(currency, close)}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <Flex column>
                <Card css={{ width: '50vw' }}>
                  <H3>Select Component</H3>
                  <Divider />
                  <P>
                    The select, selectGroup, and selectItem components form a
                    drop down list from a set of choices of your creation. Use
                    this when you want to allow your users to choose from a set
                    amount of choices.
                    <br />
                    <br />
                    Make sure to wrap this inside the form component as the
                    select components rely on the Field props from Formik.
                  </P>
                  <Select name={name} placeholder={placeholder} {...args}>
                    <SelectGroup>
                      {Object.entries(items).map(([key, value]) => {
                        return (
                          <SelectItem value={key} key={key}>
                            {value}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </Select>
                  <FormButton
                    type="submit"
                    disabled={props.values.currency === ''}
                  >
                    Submit
                  </FormButton>
                </Card>
              </Flex>
            </Form>
          )}
        </Formik>
        <RevoModal
          openOnTrigger={currency !== ''}
          renderChildren={({ close }) => {
            return (
              <Card>
                <Flex column wrap>
                  <H4>Data Submitted!</H4>
                  <H5>Here's your submission:</H5>
                  <Divider />
                  <Span>currency: {currency}</Span>
                  <FormButton
                    size="small"
                    onClick={() => {
                      setCurrency('');
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
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'currency',
    placeholder: 'hello',
  },
};
