import { Meta, StoryObj } from '@storybook/react';
import { Card, Flex, SideBar, Divider } from '../..';
import { H3, P } from '../../../text';

const meta = {
  title: 'Layout/Columns/SideBar',
  component: SideBar,
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSideBar: Story = {
  render: (args) => (
    <Flex>
      <SideBar {...args}>
        <Card>
          <H3>Side Bar</H3>
          <Divider />
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            augue a erat ornare efficitur. Nulla ultricies et risus sed aliquet.
            Sed aliquet bibendum leo, ut congue nulla fringilla id. Phasellus
            hendrerit felis quis lectus mattis, ac viverra sapien iaculis.
          </P>
        </Card>
      </SideBar>
    </Flex>
  ),
};
