import type { Meta, StoryObj } from '@storybook/react';
import { TertiaryButton } from '..';

const meta = {
  title: 'Buttons/TertiaryButton',
  component: TertiaryButton,
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
    normalCase: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
  },
} satisfies Meta<typeof TertiaryButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    normalCase: false,
    href: '#',
    children: 'TertiaryButton',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const NormalCase: Story = {
  args: {
    ...Default.args,
    normalCase: true,
  },
};

export const DisabledNormal: Story = {
  args: {
    ...Default.args,
    disabled: true,
    normalCase: true,
  },
};
