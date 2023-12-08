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
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
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
  render: ({ open, onOpen, placeholder, ...args }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubOpen, setIsSubOpen] = useState(false);
    const [bookmarksChecked, setBookmarksChecked] = useState(true);
    const [urlsChecked, setUrlsChecked] = useState(false);
    const [person, setPerson] = useState('B1');

    const mobileBP = window.innerWidth < 600;
    const mobileContentStyle = {
      position: 'fixed',
      width: '100vw',
      top: '0vh',
      left: '0vw',
      boxShadow: '$0',
      borderRadius: '$0',
    };

    return (
      <Dropdown
        open={isOpen}
        onOpen={() => setIsOpen(!isOpen)}
        placeholder="Dropdown"
        triggerCss={mobileBP ? { width: '50%' } : { width: '20%' }}
        contentCss={mobileBP ? mobileContentStyle : {}}
        {...args}
      >
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
        >
          Bookmarks
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          size="medium"
          checked={urlsChecked}
          onCheckedChange={() => setUrlsChecked(!urlsChecked)}
        >
          URLs
        </DropdownMenuCheckboxItem>
        <DropdownSeparator />
        <DropdownLabel>Radio</DropdownLabel>
        <DropdownMenuRadioGroup
          value={person}
          onValueChange={(value) => setPerson(value)}
        >
          <DropdownMenuRadioItem value="B1">B1</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="B2" size="medium">
            B2
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="B3" disabled>
            B3
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </Dropdown>
    );
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Dropdown',
    open: true,
  },
};
