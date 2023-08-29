import { Meta, StoryObj } from '@storybook/react';
import { Card, Divider } from '..';
import { H3, P } from '../../text';

const meta = {
  title: 'Layout/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    flat: {
      control: {
        type: 'boolean',
      },
      table: {
        description: '',
        defaultValue: { summary: false },
      },
    },
    unpadded: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    flat: false,
    unpadded: false,
  },
  render: (args) => {
    return (
      <Card {...args}>
        <H3>
          {args.flat && 'FLAT '}
          {args.unpadded && 'UNPADDED '}CARD
        </H3>
        <Divider />
        <P>
          This is a card. The Card component can have two props passed:{' '}
          <strong>flat</strong> and <strong>unpadded</strong>. Setting either on
          changes the appearance of the card. But passing a <em>CSS Object</em>{' '}
          prop can also allow you to change the card's CSS attributes.
        </P>
      </Card>
    );
  },
};

export const Flat: Story = {
  args: {
    ...Default.args,
    flat: true,
  },
  render: Default.render,
};

export const Unpadded: Story = {
  args: {
    ...Default.args,
    unpadded: true,
  },
  render: Default.render,
};
