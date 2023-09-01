import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../..';

const meta = {
  title: 'Forms/FormTypes/Select',
  component: Select,
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
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'test',
    placeholder: 'hello',
  },
};
