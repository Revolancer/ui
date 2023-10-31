import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  DropDown,
  DropDownRadioGroup,
  DropdownLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
  DropdownMenuRadioItem,
  DropdownSeparator,
  DropdownSubMenu,
} from '../dropdown';

const meta = {
  title: 'Collapsible/Dropdown',
  component: DropDown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'open me' },
      },
    },
  },
  render: ({...args}) => {
    const [bookmarksChecked, setBookmarksChecked] = useState(true);
    const [urlsChecked, setUrlsChecked] = useState(false);
    const [person, setPerson] = useState('pedro');

    return (
      <DropDown {...args}>
        <DropdownLabel>Sub Menu</DropdownLabel>
        <DropdownSubMenu label="Click here">
          <DropdownMenuItem>Sub Item</DropdownMenuItem>
        </DropdownSubMenu>
        <DropdownSeparator />
        <DropdownLabel>Checkbox Items</DropdownLabel>
        <DropdownMenuCheckboxItem
          checked={bookmarksChecked}
          onCheckedChange={setBookmarksChecked}
        >
          Check Bookmarks
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={urlsChecked}
          onCheckedChange={setUrlsChecked}
        >
          Check two
        </DropdownMenuCheckboxItem>
        <DropdownSeparator />
        <DropdownLabel>Dropdown Radio</DropdownLabel>
        <DropDownRadioGroup value={person} onValueChange={setPerson}>
          <DropdownMenuRadioItem value="B1">B1</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="B2">B2</DropdownMenuRadioItem>
        </DropDownRadioGroup>
        <DropdownSeparator />
      </DropDown>
    );
  },
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Dropdown Menu',
  }
};
