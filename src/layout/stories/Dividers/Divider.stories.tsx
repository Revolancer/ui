import { Meta, StoryObj } from '@storybook/react';
import { Divider, Card } from '../..';
import { H3, H4, P } from '../../../text';

const meta = {
  title: 'Layout/Dividers/Divider',
  component: Divider,
  argTypes: {
    color: {
      options: ['white', 'gray'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'gray' },
      },
    },
  },
  render: (args) => (
    <Card>
      <H3>Divider</H3>
      <H4>Info about the Divider Component</H4>
      <Divider {...args} />
      <P>
        The divider is used to separate blocks of text or components in your
        page layout
        <br />
        <br />
        The Divider will take up the width of its parent component, so make sure
        it is called/rendered inside the correct parent div.
        <br />
        <br />
        Passing a color prop allows you to choose between one of two color
        varieties: gray (the default), and white.
      </P>
      <Divider {...args} />
    </Card>
  ),
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DividerStory: Story = {
  args: {
    color: 'gray',
  },
};

export const WhiteDividerStory: Story = {
  args: {
    color: 'white',
  },
};
