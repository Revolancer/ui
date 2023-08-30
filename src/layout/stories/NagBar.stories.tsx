import { Meta, StoryObj } from '@storybook/react';
import { NagBar } from '..';
import { H5 } from '../../text';

const meta = {
  title: 'Layout/Nagbar',
  component: NagBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NagBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <NagBar>
        <H5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</H5>
      </NagBar>
    );
  },
};
