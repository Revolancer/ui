import React from 'react';
import * as RadixDropdown from '@radix-ui/react-dropdown-menu';
import { darkTheme, keyframes, styled } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faChevronDown,
  faChevronRight,
  faChevronUp,
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

const contentStyles = {
  overflow: 'hidden',
  backgroundColor: '$background',
  minWidth: '210px',
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
  padding: '$3 $9',
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

const DropdownCheckboxItem = styled(RadixDropdown.CheckboxItem, {
  ...itemStyles,
  justifyContent: 'flex-start',
  paddingLeft: '$3',
});

const DropdownRadioItem = styled(RadixDropdown.RadioItem, {
  ...itemStyles,
  justifyContent: 'flex-start',
  paddingLeft: '$3',
});

const DropdownItemIndicatorRoot = styled('div', {
  position: 'relative',
  left: '$1',
  marginRight: '$3',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: '$1',
  borderColor: '$neutral400',
  borderStyle: '$solid',
  boxShadow: '$2',
  color: 'transparent',
  transition: '$smoothly',
  cursor: 'pointer',
  overflow: 'hidden',

  variants: {
    size: {
      small: {
        width: '$7',
        height: '$7',
      },
      medium: {
        width: '$9',
        height: '$9',
        marginRight: '$4',
      },
    },
    variant: {
      checkbox: {
        borderRadius: '$1',
      },
      radio: {
        borderRadius: '999px',
      },
    },
  },
  compoundVariants: [
    {
      size: 'small',
      variant: 'radio',
      css: {
        fontSize: '8px',
      },
    },
    {
      size: 'medium',
      variant: 'radio',
      css: {
        fontSize: '12px',
      },
    },
  ],
  defaultVariants: {
    size: 'small',
    variant: 'checkbox',
  },
});

const DropdownItemIndicator = styled(RadixDropdown.ItemIndicator, {
  display: 'inline-flex',
  alignItems: 'center',
  width: '$9',
  height: '$9',
  justifyContent: 'center',
  backgroundColor: '$pink500',
  color: '$white',
  fontWeight: '$bold',
});

const DropdownSeparator = styled(RadixDropdown.Separator, {
  height: 1,
  backgroundColor: '$neutral600',
  margin: 5,
  [`.${darkTheme} &`]: {
    backgroundColor: '$neutral300',
  },
  variants: {
    light: {
      true: {
        backgroundColor: '$neutral400',
      },
    },
  },
});

const DropdownSub = styled(RadixDropdown.Sub, itemStyles);

const DropdownSubTrigger = styled(RadixDropdown.SubTrigger, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$1 $9 $1 $8',
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
  rootCss,
  triggerCss,
  contentCss,
}: {
  placeholder: string;
  open: boolean;
  onOpen: () => void;
  children: any;
  rootCss?: object;
  triggerCss?: object;
  contentCss?: object;
}) => {
  return (
    <DropdownRoot onOpenChange={onOpen} open={open} css={{ ...rootCss }}>
      <DropdownTrigger css={{ ...triggerCss }}>
        {placeholder}
        <RightSlot>
          <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
        </RightSlot>
      </DropdownTrigger>
      <RadixDropdown.Portal>
        <DropdownContent sideOffset={12} css={{ ...contentCss }}>
          {children}
        </DropdownContent>
      </RadixDropdown.Portal>
    </DropdownRoot>
  );
};

const DropdownSubMenu = ({
  placeholder,
  open,
  onOpen,
  children,
  subMenuCss,
}: {
  placeholder: string;
  open: boolean;
  onOpen: () => void;
  children: any;
  subMenuCss?: object;
}) => {
  return (
    <DropdownSub open={open} onOpenChange={onOpen} css={{ ...subMenuCss }}>
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

const DropdownMenuItem = ({
  children,
  css,
}: {
  children: any;
  css?: object;
}) => {
  return <DropdownItem css={{ ...css }}>{children}</DropdownItem>;
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
  size,
  ...props
}: {
  value: string;
  disabled?: boolean;
  onSelect?: () => void;
  children: any;
  size?: 'small' | 'medium';
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
      <DropdownItemIndicatorRoot variant="radio" size={size}>
        <DropdownItemIndicator>
          <FontAwesomeIcon icon={faCircle} />
        </DropdownItemIndicator>
      </DropdownItemIndicatorRoot>
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
  size,
  ...props
}: {
  checked: boolean;
  onCheckedChange: () => void;
  disabled?: boolean;
  onSelect?: () => void;
  children: any;
  size?: 'small' | 'medium';
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
      <DropdownItemIndicatorRoot size={size}>
        <DropdownItemIndicator>
          <FontAwesomeIcon icon={faCheck} />
        </DropdownItemIndicator>
      </DropdownItemIndicatorRoot>
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
