import type { Meta, StoryObj } from '@storybook/react';
import { Crumb } from '..';

const meta = {
  title: 'Navigation/Crumb',
  component: Crumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    href: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: '/' },
      },
    },
  },
  render: (args) => <Crumb {...args}>{args.active && 'Active '}Crumb</Crumb>,
} satisfies Meta<typeof Crumb>;

export default meta;
type Story = StoryObj<typeof meta>;

/**This Storybook document is for the crumb component, which provides users a link to see which page they're on or see other pages previously visited. Use this inside the crumb bar for app features that may require more than one page to house features. */
export const Default: Story = {
  args: {
    active: false,
    href: '/',
  },
};

export const Active: Story = {
  args: {
    ...Default.args,
    active: true,
  },
};
