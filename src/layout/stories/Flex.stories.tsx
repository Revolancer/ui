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
  render: (args) => {
    return (
      <Card css={{ width: '20vw' }}>
        <Flex {...args}>
          {[...Array(5).keys()].map((item) => {
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
};

export const Column: Story = {
  args: {
    ...Default.args,
    column: true,
  },
  render: (args) => {
    return (
      <Card css={{ width: '20vw' }}>
        <Flex {...args}>
          {[...Array(5).keys()].map((item) => {
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
};

export const Wrap: Story = {
  args: {
    ...Default.args,
    wrap: true,
    gap: 10,
  },
  render: (args) => {
    return (
      <Card css={{ width: '20vw' }}>
        <Flex {...args}>
          {[...Array(5).keys()].map((item) => {
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
};
