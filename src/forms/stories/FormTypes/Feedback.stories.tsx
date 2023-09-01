import type { Meta, StoryObj } from '@storybook/react';
import { Feedback } from '../..';

const meta = {
  title: 'Forms/FormTypes/Feedback',
  component: Feedback,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    state: {
      options: ['feedback', 'warning', 'error', 'success'],
      control: {
        type: 'select',
        table: {
          defaultValue: { summary: 'feedback' },
        },
      },
    },
  },
  render: (args) => <Feedback {...args}>This is a feedback component</Feedback>,
} satisfies Meta<typeof Feedback>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'feedback',
  },
};

export const Warning: Story = {
  args: {
    state: 'warning',
  },
};

export const Error: Story = {
  args: {
    state: 'error',
  },
};

export const Success: Story = {
  args: {
    state: 'success',
  },
};
