import { Meta, StoryObj } from '@storybook/react';
import {
  FullWidth,
  HalfWidth,
  SideBar,
  MainContentWithSideBar,
  ColumnLayout,
  TwoCols,
} from '..';

const meta = {
  title: 'Layout/Columns',
  tags: ['autodocs'],
  argTypes: {
    layout: {
      options: [
        'Full Width',
        'Half Width',
        'SideBars',
        'Two Column',
        'Column Layout',
      ],
      control: {
        type: 'radio',
        defaultValue: 'FullWidth',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** This Storybook document lets you see the appearances of the different layout components available in the Revolancer UI library. Simply choose your preferred component layout in the control panel on the bottom. */
export const Columns: Story = {
  render: (args) => {
    return <></>;
  },
};
