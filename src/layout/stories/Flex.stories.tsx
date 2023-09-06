import { Meta, StoryObj } from '@storybook/react';
import { Card, Flex } from '..';
import { H1 } from '../../text';

const meta = {
  title: 'Layout/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    column: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    wrap: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    gap: {
      control: {
        type: 'range',
        min: 0,
        max: 16,
        step: 1,
      },
      table: {
        defaultValue: { summary: 3 },
      },
    },
    children: {
      control: {
        type: 'number',
        min: 1,
        defaultValue: 5,
      },
    },
  },
  render: ({ children, ...args }) => {
    return (
      <Card css={{ width: '20vw' }}>
        <Flex {...args}>
          {[...Array(children).keys()].map((item) => {
            return (
              <Flex {...args}>
                <H1>{item + 1}</H1>
              </Flex>
            );
          })}
        </Flex>
      </Card>
    );
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    column: false,
    wrap: false,
    gap: 3,
    children: 5,
  },
};

export const Column: Story = {
  args: {
    ...Default.args,
    column: true,
  },
};

export const Wrap: Story = {
  args: {
    ...Default.args,
    wrap: true,
    gap: 10,
  },
};
