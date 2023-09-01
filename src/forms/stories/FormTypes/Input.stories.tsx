import type { Meta, StoryObj } from '@storybook/react';
import { InputInner, InputOuter, TextAreaInner } from '../..';
import { Card, Flex } from '../../../layout';
import { H5 } from '../../../text';

const meta = {
  title: 'Forms/FormTypes/InputOuter',
  component: InputOuter,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    error: {
      control: {
        type: 'boolean',
        table: {
          defaultValue: { summary: false },
        },
      },
    },
    warning: {
      control: {
        type: 'boolean',
        table: {
          defaultValue: { summary: false },
        },
      },
    },
  },
  render: (args) => (
    <InputOuter {...args}>
      <Flex column>
        <Card>
          <H5>Input inner component</H5>
          <InputInner placeholder="Input Inner Component" />
        </Card>
        <Card>
          <H5>Text area inner component</H5>
          <TextAreaInner placeholder="Text Area Inner Component" />
        </Card>
      </Flex>
    </InputOuter>
  ),
} satisfies Meta<typeof InputOuter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    error: false,
    warning: false,
  },
};

export const Error: Story = {
  args: {
    error: true,
  },
};

export const Warning: Story = {
  args: {
    warning: true,
  },
};
