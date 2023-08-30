import { Meta, StoryObj } from '@storybook/react';
import { Card, LabelledDivider } from '../..';
import { H3, H4, P } from '../../../text';

const meta = {
  title: 'Layout/Dividers/LabelledDivider',
  component: LabelledDivider,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'label' },
      },
    },
    color: {
      options: ['white', 'gray'],
      control: {
        type: 'radio',
        defaultValue: 'gray',
      },
    },
  },
  render: (args) => (
    <Card>
      <H3>Labelled Divider</H3>
      <H4>Info about the Labelled Divider Component</H4>
      <LabelledDivider {...args} />
      <P>
        The labelled divider is used to separate blocks of text or components in
        your page layout, but includes a small block of customizable text in the
        middle.
        <br />
        <br />
        The labelled divider will take up the width of its parent component, so
        make sure it is called/rendered inside the correct parent div.
        <br />
        <br />
        Passing a color prop allows you to choose between one of two color
        varieties: gray (the default), and white.
      </P>
      <LabelledDivider {...args} />
    </Card>
  ),
} satisfies Meta<typeof LabelledDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelledDividerStory: Story = {
  args: {
    label: 'label',
    color: 'gray',
  },
};
