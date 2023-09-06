import type { Meta, StoryObj } from '@storybook/react';
import { TertiaryFormButton } from '..';

const meta = {
  title: 'Buttons/TertiaryFormButton',
  component: TertiaryFormButton,
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
} satisfies Meta<typeof TertiaryFormButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    normalCase: false,
    children: 'TertiaryFormButton',
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
