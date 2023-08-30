import { Meta, StoryObj } from '@storybook/react';
import { Card, Flex, ColumnLayout, Divider } from '../..';
import { H3, P } from '../../../text';

const meta = {
  title: 'Layout/Columns/ColumnLayout',
  component: ColumnLayout,
  argTypes: {
    undecorated: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },
  },
  render: ({ undecorated, ...args }) => (
    <Card>
      <ColumnLayout {...args}>
        <H3>{undecorated && 'Undecorated '}Column Layout</H3>
      </ColumnLayout>
    </Card>
  ),
} satisfies Meta<typeof ColumnLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultColumnLayout: Story = {
  args: {
    undecorated: false,
  },
};

export const UndecoratedColumnLayout: Story = {
  args: {
    undecorated: true,
  },
};
