import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Buttons/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    role: {
      options: ['primary', 'secondary'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    role: 'primary',
    size: 'medium',
    disabled: false,
    href: '#',
    loading: false,
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    role: 'secondary',
    size: 'medium',
    href: '#',
    children: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    role: 'primary',
    size: 'medium',
    disabled: true,
    href: '#',
    children: 'Button',
  },
};

export const DisabledSecondary: Story = {
  args: {
    role: 'secondary',
    size: 'medium',
    disabled: true,
    href: '#',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    href: '#',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    href: '#',
    children: 'Button',
  },
};

export const Loading: Story = {
  args: {
    href: '#',
    loading: true,
  },
};
