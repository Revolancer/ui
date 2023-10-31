import React from 'react';
import * as RadixDropdown from '@radix-ui/react-dropdown-menu';
import { styled, keyframes, darkTheme } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCheck,
  faChevronRight,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

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

const DropdownRoot = styled(RadixDropdown.Root, {
  flexShrink: 0,
});
const DropdownContent = styled(RadixDropdown.Content, contentStyles);
const DropdownSubContent = styled(RadixDropdown.SubContent, contentStyles);

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

const DropdownItem = styled(RadixDropdown.Item, itemStyles);
const DropdownCheckboxItem = styled(RadixDropdown.CheckboxItem, itemStyles);
const DropdownRadioItem = styled(RadixDropdown.RadioItem, itemStyles);
const DropdownSubTrigger = styled(RadixDropdown.SubTrigger, {
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
});

const DropdownItemIndicator = styled(RadixDropdown.ItemIndicator, {
  position: 'absolute',
  left: '$1',
  width: '$7',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 35,
  width: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$pink500',
  backgroundColor: 'white',
  boxShadow: '$1',
  '&:hover': { backgroundColor: '$pink500' },
  '&:focus': { boxShadow: '$1' },
});

const DropdownLabel = styled(RadixDropdown.Label, {
  fontSize: '$body2',
  lineHeight: '$body2',
  color: '$neutral900',

  [`.${darkTheme} &`]: {
    color: '$neutral100',
  },
});

const DropdownSeparator = styled(RadixDropdown.Separator, {
  height: '$1',
  backgroundColor: '$neutral600',
  margin: '$3',
  [`.${darkTheme} &`]: {
    backgroundColor: '$neutral300',
  },
});

const DropDown = ({
  children,
  label,
  icon,
}: {
  children: any;
  label: string;
  icon?: IconDefinition;
}) => {
  return (
    <DropdownRoot>
      <RadixDropdown.Trigger asChild>
        {label && <RadixDropdown.Label>{label}</RadixDropdown.Label>}
        <IconButton aria-label="Customise options">
          <FontAwesomeIcon icon={icon ?? faBars} />
        </IconButton>
      </RadixDropdown.Trigger>

      <RadixDropdown.Portal>
        <DropdownContent sideOffset={5}>{children}</DropdownContent>
      </RadixDropdown.Portal>
    </DropdownRoot>
  );
};

const DropdownSubMenu = ({
  children,
  label,
  icon,
}: {
  children: any;
  label: string;
  icon?: IconDefinition;
}) => {
  return (
    <RadixDropdown.Sub>
      <DropdownSubTrigger>
        <IconButton aria-label="Dropdown Sub Menu">
          <FontAwesomeIcon icon={icon ?? faChevronRight} />
        </IconButton>
        {label}
      </DropdownSubTrigger>
      <RadixDropdown.Portal>
        <DropdownSubContent>{children}</DropdownSubContent>
      </RadixDropdown.Portal>
    </RadixDropdown.Sub>
  );
};

const DropdownMenuItem = ({ children, ...props }: { children: any }) => {
  return <DropdownItem {...props}>{children}</DropdownItem>;
};

const DropdownMenuCheckboxItem = ({
  children,
  checked,
  onCheckedChange,
  icon,
  ...props
}: {
  children: any;
  checked: boolean;
  onCheckedChange: any;
  icon?: IconDefinition;
}) => {
  return (
    <DropdownCheckboxItem
      checked={checked}
      onCheckedChange={onCheckedChange}
      {...props}
    >
      <DropdownItemIndicator>
        <FontAwesomeIcon icon={icon ?? faCheck} />
      </DropdownItemIndicator>
      {children}
    </DropdownCheckboxItem>
  );
};

const DropDownRadioGroup = ({
  children,
  value,
  onValueChange,
  ...props
}: {
  children: any;
  value: any;
  onValueChange: any;
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
  children,
  value,
  icon,
  ...props
}: {
  children: any;
  value: string;
  icon?: IconDefinition;
}) => {
  return (
    <DropdownRadioItem value={value} {...props}>
      <DropdownItemIndicator>
        <FontAwesomeIcon icon={icon ?? faCircle} />
      </DropdownItemIndicator>
      {children}
    </DropdownRadioItem>
  );
};

export {
  DropdownLabel,
  DropdownSeparator,
  DropDown,
  DropdownSubMenu,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropDownRadioGroup,
  DropdownMenuRadioItem,
};
