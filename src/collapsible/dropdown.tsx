import React from 'react';
import * as RadixDropdown from '@radix-ui/react-dropdown-menu';
import { darkTheme, keyframes, styled } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faChevronDown,
  faChevronRight,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const contentStyles = {
  overflow: 'hidden',
  backgroundColor: '$background',
  borderRadius: '$1',
  boxShadow: '$1',
  borderColor: '$neutral400',
  borderStyle: '$solid',
  borderWidth: '$1',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
};

const itemStyles = {
  fontSize: '$body2',
  lineHeight: '$body2',
  color: '$neutral800',
  borderRadius: '$1',
  display: 'flex',
  alignItems: 'center',
  padding: '4px 32px 4px 28px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$neutral300',
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    outline: 'none',
    backgroundColor: '$pink500',
    color: '$white',
  },

  [`.${darkTheme} &`]: {
    '&[data-disabled]': {
      color: '$neutral600',
    },

    '&[data-highlighted]': {
      backgroundColor: '$pink500',
      color: '$neutral900',
    },
  },
};

const triggerStyles = {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBlock: '$3',
  paddingInline: '$5',
  fontSize: '$body2',
  lineHeight: '$body2',
  gap: '$4',
  backgroundColor: '$background',
  color: '$neutral900',
  boxShadow: '$2',
  borderColor: '$neutral400',
  borderStyle: '$solid',
  borderWidth: '$1',
  borderRadius: '$1',
  width: '100%',

  '&:hover': { backgroundColor: '$neutral100' },
  '&[data-placeholder]': { color: '$neutral600' },

  [`.${darkTheme} &`]: {
    color: '$neutral100',
    borderColor: '$neutral700',
    backgroundColor: '$neutral800',
    '&:hover': { backgroundColor: '$neutral700' },
    '&[data-placeholder]': { color: '$neutral200' },
  },

  variants: {
    error: {
      true: {
        borderColor: '$red500',
        borderWidth: '$2',
        [`.${darkTheme} &`]: {
          borderColor: '$red500',
        },
      },
    },
    warning: {
      true: {
        borderColor: '$orange500',
        borderWidth: '$2',
        [`.${darkTheme} &`]: {
          borderColor: '$orange500',
        },
      },
    },
  },
};

const DropdownRoot = styled(RadixDropdown.Root, {
  flexShrink: 0,
});

const DropdownTrigger = styled(RadixDropdown.Trigger, triggerStyles);

const DropdownContent = styled(RadixDropdown.Content, contentStyles);

const DropdownItem = styled(RadixDropdown.Item, itemStyles);

const DropdownGroup = RadixDropdown.Group;

const DropdownLabel = styled(RadixDropdown.Label, {
  fontSize: '$body2',
  lineHeight: '$body2',
  color: '$neutral900',
  marginLeft: '$3',

  [`.${darkTheme} &`]: {
    color: '$neutral100',
  },
});

const RightSlot = styled('div', {
  marginLeft: 'auto',
  paddingLeft: '$6',
  color: '$neutral500',
  '[data-highlighted] > &': { color: 'white' },
  '[data-disabled] &': { color: '$neutral300' },
});

const DropdownCheckboxItem = styled(RadixDropdown.CheckboxItem, itemStyles);

const DropdownRadioItem = styled(RadixDropdown.RadioItem, itemStyles);

const DropdownItemIndicator = styled(RadixDropdown.ItemIndicator, {
  position: 'absolute',
  left: '4px',
  width: '24px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const DropdownSeparator = styled(RadixDropdown.Separator, {
  height: 1,
  backgroundColor: '$neutral600',
  margin: 5,
  [`.${darkTheme} &`]: {
    backgroundColor: '$neutral300',
  },
});

const DropdownSub = styled(RadixDropdown.Sub, itemStyles);

const DropdownSubTrigger = styled(RadixDropdown.SubTrigger, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '4px 32px 4px 28px',
  fontSize: '$body2',
  lineHeight: '$body2',
  gap: '$4',
  backgroundColor: '$background',
  color: '$neutral800',

  '&:hover': { backgroundColor: '$pink500' },
  '&[data-placeholder]': { color: '$neutral600' },
  '&[data-state="open"]': { backgroundColor: '$pink200' },

  [`.${darkTheme} &`]: {
    color: '$neutral100',
    borderColor: '$neutral700',
    backgroundColor: '$neutral800',
    '&:hover': { backgroundColor: '$neutral700' },
    '&[data-placeholder]': { color: '$neutral200' },
  },

  variants: {
    error: {
      true: {
        borderColor: '$red500',
        borderWidth: '$2',
        [`.${darkTheme} &`]: {
          borderColor: '$red500',
        },
      },
    },
    warning: {
      true: {
        borderColor: '$orange500',
        borderWidth: '$2',
        [`.${darkTheme} &`]: {
          borderColor: '$orange500',
        },
      },
    },
  },
});

const DropdownSubContent = styled(RadixDropdown.SubContent, contentStyles);

const Dropdown = ({
  placeholder,
  open,
  onOpen,
  children,
}: {
  placeholder: string;
  open: boolean;
  onOpen: () => void;
  children: any;
}) => {
  return (
    <DropdownRoot onOpenChange={onOpen} open={open}>
      <DropdownTrigger>
        <DropdownLabel>{placeholder}</DropdownLabel>
        <RightSlot>
          <FontAwesomeIcon icon={faChevronDown} />
        </RightSlot>
      </DropdownTrigger>
      <RadixDropdown.Portal>
        <DropdownContent>{children}</DropdownContent>
      </RadixDropdown.Portal>
    </DropdownRoot>
  );
};

const DropdownSubMenu = ({
  placeholder,
  open,
  onOpen,
  children,
}: {
  placeholder: string;
  open: boolean;
  onOpen: () => void;
  children: any;
}) => {
  return (
    <DropdownSub open={open} onOpenChange={onOpen}>
      <DropdownSubTrigger>
        <DropdownLabel>{placeholder}</DropdownLabel>
        <RightSlot>
          <FontAwesomeIcon icon={faChevronRight} />
        </RightSlot>
      </DropdownSubTrigger>
      <RadixDropdown.Portal>
        <DropdownSubContent>{children}</DropdownSubContent>
      </RadixDropdown.Portal>
    </DropdownSub>
  );
};

const DropdownMenuItem = ({ children, ...props }: { children: any }) => {
  return <DropdownItem {...props}>{children}</DropdownItem>;
};

const DropdownMenuRadioGroup = ({
  value,
  onValueChange,
  children,
  ...props
}: {
  value: any;
  onValueChange: (value: any) => void;
  children: any;
}) => {
  return (
    <RadixDropdown.RadioGroup
      value={value}
      onValueChange={onValueChange}
      {...props}
    >
      {children}
    </RadixDropdown.RadioGroup>
  );
};

const DropdownMenuRadioItem = ({
  value,
  disabled = false,
  onSelect,
  children,
  ...props
}: {
  value: string;
  disabled?: boolean;
  onSelect?: () => void;
  children: any;
}) => {
  return (
    <DropdownRadioItem
      value={value}
      onSelect={(e: any) => {
        e.preventDefault();
        onSelect;
      }}
      disabled={disabled}
      {...props}
    >
      <DropdownItemIndicator>
        <FontAwesomeIcon icon={faCircle} />
      </DropdownItemIndicator>
      {children}
    </DropdownRadioItem>
  );
};

const DropdownMenuCheckboxItem = ({
  checked,
  onCheckedChange,
  disabled,
  onSelect,
  children,
  ...props
}: {
  checked: boolean;
  onCheckedChange: () => void;
  disabled?: boolean;
  onSelect?: () => void;
  children: any;
}) => {
  return (
    <DropdownCheckboxItem
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      onSelect={(e: any) => {
        e.preventDefault();
        onSelect;
      }}
      {...props}
    >
      <DropdownItemIndicator>
        <FontAwesomeIcon icon={faCheck} />
      </DropdownItemIndicator>
      {children}
    </DropdownCheckboxItem>
  );
};

export {
  Dropdown,
  DropdownSubMenu,
  DropdownGroup,
  DropdownMenuItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem,
};
