import type { Meta, StoryObj } from '@storybook/react';
import { FormButton } from '..';

const meta = {
  title: 'Buttons/FormButton',
  component: FormButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    role: {
      options: ['primary', 'secondary', 'dangerous'],
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
    disabled: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
  },
} satisfies Meta<typeof FormButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    role: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    children: 'FormButton',
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    role: 'secondary',
  },
};

export const Dangerous: Story = {
  args: {
    ...Primary.args,
    role: 'dangerous',
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

export const DisabledSecondary: Story = {
  args: {
    ...Primary.args,
    role: 'secondary',
    disabled: true,
  },
};

export const DisabledDangerous: Story = {
  args: {
    ...Primary.args,
    role: 'dangerous',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    size: 'small',
    children: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    ...Primary.args,
    size: 'large',
    children: 'Large Button',
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    loading: true,
    children: '',
  },
};
