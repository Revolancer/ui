import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '..';

const meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    root: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: '' },
      },
    },
    rootName: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: '' },
      },
    },
    routes: {
      control: {
        type: 'object',
      },
      table: {
        defaultValue: { summary: ['1', '2', '3', '4'] },
      },
    },
    routeNames: {
      control: {
        type: 'object',
      },
      table: {
        defaultValue: { summary: ['1', '2', '3', '4'] },
      },
    },
  },
  render: (args) => <Tabs {...args} />,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

/**This Storybook document is for the tab bar component, which allows users access to different components and load the selected one in the same page. Use this for app features that have different components that need featuring. */
export const Default: Story = {
  args: {
    root: 'tabs',
    rootName: 'Tabs',
    routes: ['crumb', 'crumb-divider', 'crumb-bar'],
    routeNames: ['Crumb', 'Crumb Divider', 'Crumb Bar'],
  },
};
