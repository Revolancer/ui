import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Dropdown,
  DropdownSubMenu,
  DropdownGroup,
  DropdownMenuItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem,
} from '../dropdown';

const meta = {
  title: 'Collapsible/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'Dropdown' },
      },
    },
    open: {},
    onOpen: {},
    children: {},
  },
  render: ({ open, onOpen, ...args }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubOpen, setIsSubOpen] = useState(false);
    const [bookmarksChecked, setBookmarksChecked] = useState(true);
    const [urlsChecked, setUrlsChecked] = useState(false);
    const [person, setPerson] = useState('B1');

    return (
      <Dropdown open={isOpen} onOpen={() => setIsOpen(!isOpen)} {...args}>
        <DropdownLabel>Sub Menu</DropdownLabel>
        <DropdownSubMenu
          open={isSubOpen}
          onOpen={() => setIsSubOpen(!isSubOpen)}
          placeholder="Sub Menu"
        >
          <DropdownGroup>
            <DropdownMenuItem>HELLO</DropdownMenuItem>
            <DropdownMenuItem>LOL</DropdownMenuItem>
            <DropdownMenuItem>HI</DropdownMenuItem>
          </DropdownGroup>
        </DropdownSubMenu>
        <DropdownSeparator />
        <DropdownLabel>CheckBoxes</DropdownLabel>
        <DropdownMenuCheckboxItem
          checked={bookmarksChecked}
          onCheckedChange={() => setBookmarksChecked(!bookmarksChecked)}
          textValue="Bookmarks"
        />
        <DropdownMenuCheckboxItem
          checked={urlsChecked}
          onCheckedChange={() => setUrlsChecked(!urlsChecked)}
          textValue="URLs"
        />
        <DropdownSeparator />
        <DropdownLabel>Radio</DropdownLabel>
        <DropdownMenuRadioGroup
          value={person}
          onValueChange={(value) => setPerson(value)}
        >
          <DropdownMenuRadioItem value="B1" textValue="B1" />
          <DropdownMenuRadioItem value="B2" textValue="B2" />
          <DropdownMenuRadioItem value="B3" textValue="B3" disabled />
        </DropdownMenuRadioGroup>
      </Dropdown>
    );
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
