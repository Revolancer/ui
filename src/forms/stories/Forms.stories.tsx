import type { Meta, StoryObj } from '@storybook/react';
import { Formik } from 'formik';
import {
  Form,
  PasswordReveal,
  InputInner,
  InputOuter,
  Checkbox,
  Slider,
  TextAreaInner,
  SelectGroup,
  SelectItem,
  Select,
} from '..';
import { useState } from 'react';
import { H4, H5, P, Span } from '../../text';
import { FormButton } from '../../buttons';
import { RevoModal } from '../../modals';
import { Card, Divider, Flex } from '../../layout';

const Template = ({ formTypes }: { formTypes: string[] }) => {
  interface QuerySet {
    name?: string;
    password?: string;
    strength?: number;
    method?: string;
    confirm?: boolean;
    terms?: string;
  }
  const [revealed, setRevealed] = useState(false);
  const [data, setData] = useState<QuerySet>({});

  const submitHandler = (dataSet: QuerySet, close: () => void) => {
    const empty = ['', 'false', '0', 0, false];
    const query = Object.entries(dataSet).filter(
      ([key, value]) => !empty.includes(value) && key !== 'confirm',
    );
    setData(Object.fromEntries(query));
    close();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          password: '',
          strength: 0,
          method: '',
          confirm: false,
          terms: '',
        }}
        onSubmit={(values) => submitHandler(values, close)}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            {formTypes.includes('input') && (
              <>
                <H5>Name: </H5>
                <InputOuter>
                  <InputInner
                    placeholder="Stacy Fakename"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </InputOuter>
              </>
            )}
            {formTypes.includes('password') && (
              <>
                <H5>Password: </H5>
                <InputOuter>
                  <InputInner
                    type={revealed ? 'text' : 'password'}
                    placeholder="enter password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <PasswordReveal
                    revealed={revealed}
                    onClick={() => setRevealed(!revealed)}
                  />
                </InputOuter>
              </>
            )}
            {formTypes.includes('slider') && (
              <>
                <H5>Strength:</H5>
                <P>Please enter your perceived strength rating.</P>
                <Slider name="strength" max={20} step={2} />
              </>
            )}
            {formTypes.includes('select') && (
              <>
                <H5>Method:</H5>
                <P>Please check your strength check method.</P>
                <Select name="method" placeholder="strength check">
                  <SelectGroup>
                    <SelectItem value="Lift Weights">
                      Lift a 100kg Weight
                    </SelectItem>
                    <SelectItem value="FIGHT">Fight a Lion</SelectItem>
                    <SelectItem value="I only play TTRPGs">
                      Roll a D20
                    </SelectItem>
                    <SelectItem value="I have long since held back so many tears">
                      Show emotional vulnerability
                    </SelectItem>
                  </SelectGroup>
                </Select>
              </>
            )}
            {formTypes.includes('checkbox') && (
              <Checkbox name="confirm" checked={values.confirm}>
                I have read and accepted the terms and conditions
              </Checkbox>
            )}
            {formTypes.includes('textarea') && (
              <InputOuter>
                <TextAreaInner
                  placeholder="Please enter your terms and conditions"
                  name="terms"
                  value={values.terms}
                  onChange={handleChange}
                />
              </InputOuter>
            )}
            <FormButton
              type="submit"
              disabled={
                formTypes.includes('checkbox') ? !values.confirm : false
              }
            >
              Submit
            </FormButton>
          </Form>
        )}
      </Formik>
      <RevoModal
        openOnTrigger={Object.keys(data).length > 0}
        renderChildren={({ close }) => {
          return (
            <Flex column wrap>
              <H4>Data Submitted!</H4>
              <H5>Here's your submission:</H5>
              <Divider />
              {Object.entries(data).map(([key, value]) => (
                <Flex key={key}>
                  <H5>{key}: </H5>
                  <Span>{value}</Span>
                </Flex>
              ))}
              <FormButton
                size="small"
                onClick={() => {
                  setData({});
                  close();
                }}
              >
                CLOSE
              </FormButton>
            </Flex>
          );
        }}
      />
    </>
  );
};

const meta = {
  title: 'Forms/Forms',
  tags: ['autodocs'],
  component: Template,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    formTypes: {
      options: [
        'input',
        'password',
        'slider',
        'select',
        'checkbox',
        'textarea',
      ],
      control: {
        type: 'check',
      },
      table: {
        defaultValue: { summary: [] },
      },
    },
  },
} satisfies Meta<typeof Template>;

export default meta;
type Story = StoryObj<typeof meta>;

/**This Storybook document is an interactive form creator, it allows you to see the implementations of the different form input components available in the Revolancer UI Library. */
export const Default: Story = {
  args: {
    formTypes: ['input', 'password'],
  },
};
