import { Meta, StoryObj } from '@storybook/react';
import { Card, HalfWidth, Divider, ColumnLayout } from '../..';
import { H3, P } from '../../../text';

const meta = {
  title: 'Layout/Columns/HalfWidth',
  component: HalfWidth,
} satisfies Meta<typeof HalfWidth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultHalfWidth: Story = {
  render: () => (
    <ColumnLayout>
      <HalfWidth>
        <Card>
          <H3>Half Width</H3>
          <Divider />
          <P>
            The HalfWidth component allows you to set a div in the page layout
            that takes up only half the width of the parent div.
            <br />
            <br /> Makes sure the HalfWidth component is wrapped in a
            ColumnLayout component for this to work.
          </P>
        </Card>
      </HalfWidth>
      <HalfWidth>
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
    </ColumnLayout>
  ),
};
