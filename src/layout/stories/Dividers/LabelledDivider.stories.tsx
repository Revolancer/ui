import { Meta, StoryObj } from '@storybook/react';
import { LabelledDivider } from '../../divider';

const meta = {
  title: 'Layout/Dividers/LabelledDivider',
  component: LabelledDivider,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'label' },
      },
    },
  },
} satisfies Meta<typeof LabelledDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelledDividerStory: Story = {
  args: {
    label: 'label',
  },
};
