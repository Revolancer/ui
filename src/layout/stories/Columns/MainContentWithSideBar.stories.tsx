import { Meta, StoryObj } from '@storybook/react';
import { Card, Flex, MainContentWithSideBar, Divider } from '../..';
import { H3, P } from '../../../text';

const meta = {
  title: 'Layout/Columns/MainContentWithSideBar',
  component: MainContentWithSideBar,
} satisfies Meta<typeof MainContentWithSideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultMainContentWithSideBar: Story = {
  render: (args) => (
    <Flex>
      <MainContentWithSideBar {...args}>
        <Card>
          <H3>Main Content with Side Bar</H3>
          <Divider />
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            augue a erat ornare efficitur. Nulla ultricies et risus sed aliquet.
            Sed aliquet bibendum leo, ut congue nulla fringilla id. Phasellus
            hendrerit felis quis lectus mattis, ac viverra sapien iaculis.
          </P>
        </Card>
      </MainContentWithSideBar>
    </Flex>
  ),
};
