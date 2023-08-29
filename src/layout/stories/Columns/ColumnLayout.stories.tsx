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
} satisfies Meta<typeof ColumnLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultColumnLayout: Story = {
  args: {
    undecorated: false,
  },
  render: (args) => (
    <Card>
      <ColumnLayout {...args}>
        <H3>Column Layout</H3>
      </ColumnLayout>
    </Card>
  ),
};

export const UndecoratedColumnLayout: Story = {
  args: {
    ...DefaultColumnLayout.args,
    undecorated: true,
  },
  render: DefaultColumnLayout.render,
};
