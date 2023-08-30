import { Meta, StoryObj } from '@storybook/react';
import { Card, MainContentWithSideBar, Divider, ColumnLayout } from '../..';
import { H3, P } from '../../../text';

const meta = {
  title: 'Layout/Columns/MainContentWithSideBar',
  component: MainContentWithSideBar,
} satisfies Meta<typeof MainContentWithSideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultMainContentWithSideBar: Story = {
  render: () => (
    <ColumnLayout>
      <MainContentWithSideBar>
        <Card>
          <H3>Main Content with Side Bar</H3>
          <Divider />
          <P>
            The MainContentWithSideBar component is used in tandem with the
            SideBar component to create a column layout where the two components
            are split in a 2:1 ratio, meaning the Main Content div is twice as
            wide as the SideBar div.
            <br />
            <br /> Make sure the MainContentWithSideBar component is wrapped in
            a ColumnLayout component for this to work.
          </P>
        </Card>
      </MainContentWithSideBar>
    </ColumnLayout>
  ),
};
