import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '..';
import { useState } from 'react';

const meta = {
  title: 'Buttons/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'Switch' },
      },
    },
    children: {},
    id: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'SW-1' },
      },
    },
    defaultChecked: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    checked: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  render: ({ handleCheckedChange, ...args }) => {
    const [checked, setChecked] = useState(true);
    return (
      <Switch
        checked={checked}
        handleCheckedChange={() => setChecked(!checked)}
        {...args}
      >
        {checked ? 'Admin' : 'Plebian'} Mode
      </Switch>
    );
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
