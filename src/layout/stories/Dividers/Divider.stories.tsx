import { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../../divider';

const meta = {
  title: 'Layout/Dividers/Divider',
  component: Divider,
  argTypes: {
    color: {
      options: ['white', 'gray'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'gray' },
      },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DividerStory: Story = {
  args: {
    color: 'gray',
  },
};

export const WhiteDividerStory: Story = {
  args: {
    color: 'white',
  },
};
