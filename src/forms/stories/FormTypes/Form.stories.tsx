import type { Meta, StoryObj } from '@storybook/react';
import { Form, InputInner, InputOuter } from '../..';
import { Formik } from 'formik';
import { FormButton } from '../../../buttons';
import { Card, Divider, Flex } from '../../../layout';
import { H3, H4, H5, P, Span } from '../../../text';
import { useState } from 'react';
import { RevoModal } from '../../../modals';

const meta = {
  title: 'Forms/FormTypes/Form',
  component: Form,
  parameters: {
    layout: 'centered',
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
                    The form component is a styled nesting component for all
                    your other form components when creating a form for your
                    project.
                    <br />
                    <br />
                    Make sure to wrap this in a Formik component and is rendered
                    through the Formik component's render props.
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
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
