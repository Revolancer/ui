import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '..';

const meta = {
  title: 'Buttons/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    href: '#',
    children: 'Link',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
