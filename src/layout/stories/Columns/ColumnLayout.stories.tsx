import { Meta, StoryObj } from '@storybook/react';
import { Card, Flex, ColumnLayout, Divider, FullWidth } from '../..';
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
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  render: ({ undecorated, ...args }) => (
    <ColumnLayout undecorated={undecorated} {...args}>
      <FullWidth>
        <Card>
          <Flex column>
            <H3>{undecorated && 'Undecorated '}Column Layout</H3>
            <Divider />
            <P>
              The Column Layout is a wrapping component for your other layout
              components. This sets the proper dimensions and layout behavior
              for your FullWidth, HalfWidth, and SideBar components.
            </P>
            {undecorated && (
              <P>
                Setting your ColumnLayout component to undecorated changes the
                maxWidth, padding, and/or flex gap at varying screen sizes.
              </P>
            )}
          </Flex>
        </Card>
      </FullWidth>
    </ColumnLayout>
  ),
} satisfies Meta<typeof ColumnLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultColumnLayout: Story = {};

export const UndecoratedColumnLayout: Story = {
  args: {
    undecorated: true,
  },
};
