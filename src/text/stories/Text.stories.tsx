import type { Meta, StoryObj } from '@storybook/react';
import { H1, H2, H3, H4, H5, P, Span } from '..';

const Template = ({ texts, content }: { texts: string[]; content: string }) => {
  return (
    <>
      {texts.includes('H1') && <H1>{content}</H1>}
      {texts.includes('H2') && <H2>{content}</H2>}
      {texts.includes('H3') && <H3>{content}</H3>}
      {texts.includes('H4') && <H4>{content}</H4>}
      {texts.includes('H5') && <H5>{content}</H5>}
      {texts.includes('P') && <P>{content}</P>}
      {texts.includes('Span') && <Span>{content}</Span>}
    </>
  );
};

const meta = {
  title: 'Text/Texts',
  component: Template,
  tags: ['autodocs'],
  argTypes: {
    texts: {
      options: ['H1', 'H2', 'H3', 'H4', 'H5', 'P', 'Span'],
      control: {
        type: 'check',
      },
    },
    content: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'TEXT' },
      },
    },
  },
  render: (args) => <Template {...args} />,
} satisfies Meta<typeof Template>;

export default meta;
type Story = StoryObj<typeof meta>;

/** This Storybook document shows the different text elements you can apply in your applications using the Revolancer UI Library */
export const Default: Story = {
  args: {
    texts: ['H1', 'H2', 'H3', 'H4', 'H5', 'P', 'Span'],
    content: 'TEXT',
  },
};

/** The H1 Element is the largest sized text element and is used as a header or page title */
export const Header1Text: Story = {
  args: {
    texts: ['H1'],
    content: 'This text uses H1 text element',
  },
  render: ({ content, ...args }) => <H1>{content}</H1>,
};

/** The H2 Element is the second largest sized text element and is used as a subtitle under the H1 element*/
export const Header2Text: Story = {
  args: {
    texts: ['H2'],
    content: 'This text uses H2 text element',
  },
  render: ({ content, ...args }) => <H2>{content}</H2>,
};

/** The H3 Element is the third largest sized text element and is used as a header for a page other than the main page */
export const Header3Text: Story = {
  args: {
    texts: ['H3'],
    content: 'This text uses H3 text element',
  },
  render: ({ content, ...args }) => <H3>{content}</H3>,
};

/** The H4 Element is the fourth largest sized text element and is used as a subtitle under the H3 element */
export const Header4Text: Story = {
  args: {
    texts: ['H4'],
    content: 'This text uses H4 text element',
  },
  render: ({ content, ...args }) => <H4>{content}</H4>,
};

/** The H5 Element is the fifth largest sized text element and is used as text within the body of a page */
export const Header5Text: Story = {
  args: {
    texts: ['H5'],
    content: 'This text uses H5 text element',
  },
  render: ({ content, ...args }) => <H5>{content}</H5>,
};

/** The P Element is the smallest sized text element and is used for the body content in a page */
export const PText: Story = {
  args: {
    texts: ['P'],
    content: 'This text uses P text element',
  },
  render: ({ content, ...args }) => <P>{content}</P>,
};

/** The Span Element is the smallest sized text element and its use case is similar to the P element */
export const SpanText: Story = {
  args: {
    texts: ['Span'],
    content: 'This text uses Span text element',
  },
  render: ({ content, ...args }) => <Span>{content}</Span>,
};
