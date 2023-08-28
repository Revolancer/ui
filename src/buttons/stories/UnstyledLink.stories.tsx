import type { Meta, StoryObj } from '@storybook/react';
import { UnstyledLink } from '..';

const meta = {
  title: 'Buttons/UnstyledLink',
  component: UnstyledLink,
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
} satisfies Meta<typeof UnstyledLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    href: '#',
    children: 'UnstyledLink',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
