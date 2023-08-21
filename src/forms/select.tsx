import React from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { Field, FieldProps } from 'formik';
import { Feedback } from './feedback';
import { styled, darkTheme } from '../styles';

const SelectRoot = styled(RadixSelect.Root, {
  flexShrink: 0,
});

const SelectTrigger = styled(RadixSelect.SelectTrigger, {
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

const SelectIcon = styled(RadixSelect.SelectIcon, {
  color: '$neutral800',
});

const SelectContent = styled(RadixSelect.Content, {
  overflow: 'hidden',
  backgroundColor: '$background',
  borderRadius: '$1',
  boxShadow: '$1',
  borderColor: '$neutral400',
  borderStyle: '$solid',
  borderWidth: '$1',
});

const SelectViewport = styled(RadixSelect.Viewport, {
  padding: 5,
});

const StyledItem = styled(RadixSelect.Item, {
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
});

const SelectLabel = styled(RadixSelect.Label, {
  fontSize: '$body2',
  lineHeight: '$body2',
  color: '$neutral900',

  [`.${darkTheme} &`]: {
    color: '$neutral100',
  },
});

const SelectSeparator = styled(RadixSelect.Separator, {
  height: 1,
  backgroundColor: '$neutral600',
  margin: 5,
  [`.${darkTheme} &`]: {
    backgroundColor: '$neutral300',
  },
});

const StyledItemIndicator = styled(RadixSelect.ItemIndicator, {
  position: 'absolute',
  left: '4px',
  width: '24px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '24px',
  backgroundColor: '$white',
  color: '$neutral900',
  cursor: 'default',
  [`.${darkTheme} &`]: {
    backgroundColor: '$neutral900',
    color: '$white',
  },
};

const SelectScrollUpButton = styled(
  RadixSelect.ScrollUpButton,
  scrollButtonStyles,
);

const SelectScrollDownButton = styled(
  RadixSelect.ScrollDownButton,
  scrollButtonStyles,
);

const SelectGroup = RadixSelect.Group;

const Select = ({
  name,
  placeholder,
  children,
}: {
  name: string;
  placeholder: string;
  children: any;
}) => {
  return (
    <Field name={name} id={`select-${name}`}>
      {({
        field: { value },
        form: { setFieldValue, errors, touched },
      }: FieldProps) => (
        <>
          <SelectRoot
            onValueChange={(val) => setFieldValue(name, val)}
            value={value}
          >
            <SelectTrigger error={touched[name] && !!errors[name]}>
              <RadixSelect.Value placeholder={placeholder} />
              <SelectIcon>
                <FontAwesomeIcon icon={faChevronDown} />
              </SelectIcon>
            </SelectTrigger>
            <RadixSelect.Portal>
              <SelectContent>
                <SelectScrollUpButton>
                  <FontAwesomeIcon icon={faChevronUp} />
                </SelectScrollUpButton>
                <SelectViewport>{children}</SelectViewport>
                <SelectScrollDownButton>
                  <FontAwesomeIcon icon={faChevronDown} />
                </SelectScrollDownButton>
              </SelectContent>
            </RadixSelect.Portal>
          </SelectRoot>
          {touched[name] && errors[name] && (
            <Feedback state="error">{errors[name]}</Feedback>
          )}
        </>
      )}
    </Field>
  );
};

const SelectItem = React.forwardRef<
  HTMLDivElement,
  RadixSelect.SelectItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledItem {...props} ref={forwardedRef}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <StyledItemIndicator>
        <FontAwesomeIcon icon={faCheck} />
      </StyledItemIndicator>
    </StyledItem>
  );
});
SelectItem.displayName = 'SelectItem';

export {
  SelectItem,
  SelectGroup,
  SelectSeparator,
  SelectLabel,
  Select,
};
