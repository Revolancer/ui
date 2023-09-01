import type { Meta, StoryObj } from '@storybook/react';
import { InputInner, InputOuter, TextAreaInner } from '../..';
import { Flex } from '../../../layout';

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
        <InputInner placeholder="Input Inner Component" />
        <TextAreaInner placeholder="Text Area Inner Component" />
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
