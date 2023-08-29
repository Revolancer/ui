import { Meta, StoryObj } from '@storybook/react';
import { Card, Flex, HalfWidth, Divider } from '../..';
import { H3, P } from '../../../text';

const meta = {
  title: 'Layout/Columns/HalfWidth',
  component: HalfWidth,
} satisfies Meta<typeof HalfWidth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultHalfWidth: Story = {
  render: (args) => (
    <Flex>
      <HalfWidth {...args}>
        <Card>
          <H3>Half Width</H3>
          <Divider />
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            augue a erat ornare efficitur. Nulla ultricies et risus sed aliquet.
            Sed aliquet bibendum leo, ut congue nulla fringilla id. Phasellus
            hendrerit felis quis lectus mattis, ac viverra sapien iaculis.
          </P>
        </Card>
      </HalfWidth>
      <HalfWidth {...args}>
        <Card>
          <H3>Half Width</H3>
          <Divider />
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            augue a erat ornare efficitur. Nulla ultricies et risus sed aliquet.
            Sed aliquet bibendum leo, ut congue nulla fringilla id. Phasellus
            hendrerit felis quis lectus mattis, ac viverra sapien iaculis.
          </P>
        </Card>
      </HalfWidth>
    </Flex>
  ),
};
