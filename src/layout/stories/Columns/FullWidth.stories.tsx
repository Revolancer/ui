import { Meta, StoryObj } from '@storybook/react';
import { FullWidth, Card, Divider, Flex } from '../..';
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
} satisfies Meta<typeof FullWidth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFullWidth: Story = {
  args: {
    placeholder: false,
  },
  render: (args) => (
    <Flex>
      <FullWidth {...args}>
        <Card>
          <H3>Full Width</H3>
          <Divider />
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            augue a erat ornare efficitur. Nulla ultricies et risus sed aliquet.
            Sed aliquet bibendum leo, ut congue nulla fringilla id. Phasellus
            hendrerit felis quis lectus mattis, ac viverra sapien iaculis.
          </P>
        </Card>
      </FullWidth>
    </Flex>
  ),
};

export const PlaceholderFullWidth: Story = {
  args: {
    placeholder: true,
  },
  render: (args) => (
    <Flex>
      <FullWidth {...args}>
        <Card>
          <H3>Placeholder Full Width</H3>
          <Divider />
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            augue a erat ornare efficitur. Nulla ultricies et risus sed aliquet.
            Sed aliquet bibendum leo, ut congue nulla fringilla id. Phasellus
            hendrerit felis quis lectus mattis, ac viverra sapien iaculis.
          </P>
        </Card>
      </FullWidth>
    </Flex>
  ),
};
