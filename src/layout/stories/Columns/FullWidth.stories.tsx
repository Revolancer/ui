import { Meta, StoryObj } from '@storybook/react';
import { FullWidth, Divider, Flex, ColumnLayout } from '../..';
import { H3, P } from '../../../text';

const meta = {
  title: 'Layout/Columns/FullWidth',
  component: FullWidth,
  argTypes: {
    placeholder: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  render: ({ placeholder, ...args }) => (
    <ColumnLayout>
      <FullWidth placeholder={placeholder} {...args}>
        <Flex column>
          <H3>{placeholder && 'Placeholder '}Full Width</H3>
          <Divider />
          <P>
            The FullWidth component lays out your page in full width of the page
            layout. Use this for main pages where you want your information in
            one uniform composition.
          </P>
          {placeholder && (
            <P>
              Adding the placeholder prop sets your FullWidth component to take
              up 80% of the viewport height as well as adding card-like css
              properties
            </P>
          )}
        </Flex>
      </FullWidth>
    </ColumnLayout>
  ),
} satisfies Meta<typeof FullWidth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFullWidth: Story = {};

export const PlaceholderFullWidth: Story = {
  args: {
    placeholder: true,
  },
};
