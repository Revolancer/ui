import { Meta, StoryObj } from '@storybook/react';
import { Card, SideBar, Divider, ColumnLayout } from '../..';
import { H3, P } from '../../../text';

const meta = {
  title: 'Layout/Columns/SideBar',
  component: SideBar,
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSideBar: Story = {
  render: () => (
    <ColumnLayout>
      <SideBar>
        <Card>
          <H3>Side Bar</H3>
          <Divider />
          <P>
            The SideBar component is used in tandem with the
            MainContentWithSideBar component to create a column layout where the
            two components are split in a 2:1 ratio, meaning the Main Content
            div is twice as wide as the SideBar div.
            <br />
            <br /> Make sure the SideBar component is wrapped in a ColumnLayout
            component for this to work.
          </P>
        </Card>
      </SideBar>
    </ColumnLayout>
  ),
};
