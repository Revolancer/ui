import type { Meta, StoryObj } from '@storybook/react';
import { TagElement, TagArray } from '..';
import { useState } from 'react';
import { P } from '../../text';
import { Flex } from '../../layout';

const meta = {
  title: 'Users/Tags',
  component: TagElement,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tag: {
      control: 'object',
    },
    href: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: '#' },
      },
    },
  },
} satisfies Meta<typeof TagElement>;

export default meta;
type Story = StoryObj<typeof meta>;

/**This Storybook document is for the tag and tag array elements, which allows users to show their skills in tags and allows viewers to discover other users and needs with the same tag. */
export const Default: Story = {
  args: {
    tag: {
      id: 'tag-01',
      text: 'first Tag',
    },
    href: '#',
    onClick: undefined,
    onClose: undefined,
  },
};

export const WithOnClick: Story = {
  args: {
    tag: {
      id: 'tag-01',
      text: 'tag with onClick',
    },
    href: '#',
    onClose: undefined,
  },
  render: ({ onClick, ...args }) => {
    const [open, setOpen] = useState(false);

    return (
      <Flex
        column
        gap={3}
        css={{ justifyContent: 'center', alignItems: 'center' }}
      >
        {open && <P>OPEN</P>}
        <TagElement onClick={() => setOpen(!open)} {...args} />
      </Flex>
    );
  },
};

export const WithHref: Story = {
  args: {
    tag: {
      id: 'tag-01',
      text: 'tag with onClick',
    },
    onClick: undefined,
    onClose: undefined,
  },
  render: () => {
    const tagArray = [
      {
        id: '/?path=/docs/buttons-button--docs',
        text: 'to Buttons',
      },
      {
        id: '/?path=/docs/text-texts--docs',
        text: 'to Text',
      },
      {
        id: '#',
        text: 'stay here',
      },
      {
        id: 'test',
        text: 'test',
      },
      {
        id: 'test',
        text: 'test',
      },
      {
        id: 'test',
        text: 'test',
      },
      {
        id: 'test',
        text: 'test',
      },
    ];
    return (
      <>
        <TagArray tags={tagArray} expander />
      </>
    );
  },
};
