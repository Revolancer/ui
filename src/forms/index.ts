import { styled, darkTheme } from '../styles';
import { Form as FormikForm } from 'formik';
import * as RadixSlider from '@radix-ui/react-slider';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import * as RadixSelect from '@radix-ui/react-select';

//checked progress items
export const CheckColumns = styled('div', {
  display: 'grid',
  gap: '$4',

  '@md': {
    gridTemplateRows: '1fr 1fr 1fr',
    gridAutoFlow: 'column',
  },

  '@lg': {
    gridTemplateRows: '1fr 1fr',
  },
});

export const CheckText = styled('p', {
  color: '$neutral900',

  variants: {
    checked: {
      true: {
        color: '$neutral600',
        textDecorationColor: '$neutral600',
        textDecorationLine: 'line-through',
      },
    },
  },
});

export const CheckIconBorder = styled('div', {
  borderRadius: '100%',
  borderStyle: '$solid',
  borderWidth: '$2',
  borderColor: '$neutral500',
  width: '$7',
  height: '$7',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    checked: {
      true: {
        borderColor: '$green500',
        color: '$green500',
      },
    },
  },
});

//feedback text form
export const FeedbackText = styled('span', {
  fontSize: '$body2',
  paddingInlineStart: '$1',
  display: 'inline-flex',
  gap: '$4',
  alignItems: 'center',

  variants: {
    state: {
      feedback: {
        color: '$navy500',
      },
      warning: {
        color: '$orange500',
      },
      error: {
        color: '$red500',
      },
      success: {
        color: '$green500',
      },
    },
  },

  defaultVariants: {
    state: 'feedback',
  },
});

export const FeedbackTextAfter = styled('span', {
  display: 'inline-flex',
  flexWrap: 'wrap',
  gap: '$2',
});

//main form
export const Form = styled(FormikForm, {
  display: 'flex',
  gap: '$4',
  flexDirection: 'column',
  width: '100%',
});

//slider
export const SliderRoot = styled(RadixSlider.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: '100%',
  height: '20px',
});

export const SliderTrack = styled(RadixSlider.Track, {
  backgroundColor: '$neutral500',
  position: 'relative',
  flexGrow: 1,
  borderRadius: '9999px',
  height: '4px',
  overflow: 'hidden',
});

export const SliderRange = styled(RadixSlider.Range, {
  position: 'absolute',
  backgroundColor: '$pink500',
  borderRadius: '0',
  height: '100%',
});

export const SliderThumb = styled(RadixSlider.Thumb, {
  display: 'block',
  width: '32px',
  height: '32px',
  backgroundColor: '$white',
  borderColor: '$neutral500',
  borderWidth: '$1',
  borderStyle: '$solid',
  boxShadow: '$2',
  borderRadius: '100%',

  '&:hover': {
    backgroundColor: '$neutral100',
  },

  '&:focus': {
    outline: 'none',
  },
});

//input fields
export const InputOuter = styled('div', {
  backgroundColor: '$background',
  color: '$neutral900',
  borderColor: '$neutral400',
  borderStyle: '$solid',
  borderWidth: '$1',
  borderRadius: '$1',
  boxShadow: '$2',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  fontSize: '$body2',
  paddingBlock: '$3',
  paddingInline: '$5',

  [`.${darkTheme} &`]: {
    color: '$neutral100',
    borderColor: '$neutral700',
    backgroundColor: '$neutral800',
  },

  '&:focus-within': {
    borderColor: '$navy500',
    borderWidth: '$2',
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

export const InputInner = styled('input', {
  border: 'none',
  background: 'none',
  flexGrow: '1',
  color: 'inherit',

  '&:focus': {
    border: 'none',
    outline: 'none',
  },
});

export const TextAreaInner = styled('textarea', {
  border: 'none',
  background: 'none',
  flexGrow: '1',
  color: 'inherit',

  '&:focus': {
    border: 'none',
    outline: 'none',
  },
});

//checkbox
export const CheckboxRoot = styled(RadixCheckbox.Root, {
  backgroundColor: 'transparent',
  margin: '$1',
  width: '$7',
  height: '$7',
  borderRadius: '$1',
  borderWidth: '$1',
  borderColor: '$neutral400',
  borderStyle: '$solid',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '$2',
  color: '$white',
  transition: '$smoothly',
  cursor: 'pointer',

  '&.focus': {
    outline: 'none',
  },

  '&[aria-checked="true"]': {
    backgroundColor: '$pink500',
    borderColor: '$pink500',
    boxShadow: 'none',
  },

  [`.${darkTheme} &`]: {
    borderColor: '$neutral700',
    backgroundColor: '$neutral800',
    '&[aria-checked="true"]': {
      borderColor: '$pink500',
      backgroundColor: '$pink500',
    },
  },
});
export const CheckboxIndicator = styled(RadixCheckbox.Indicator, {});

export const CheckboxWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
});

//progress-traffic
export const TrafficOuter = styled('div', {
  position: 'relative',
  width: '100%',
  height: '$5',
  borderRadius: '$3',
  overflow: 'hidden',
});

export const TrafficBG = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '$neutral300',

  [`.${darkTheme} &`]: {
    backgroundColor: '$neutral700',
  },
});

export const TrafficInner = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  borderRadius: '$3',
});

//progress
export const Outer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '$2',
  borderRadius: '$3',
  borderColor: '$neutral400',
  borderStyle: '$solid',
  borderWidth: '$1',
});

export const BG = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '$black',
  opacity: '$opacity$100',

  [`.${darkTheme} &`]: {
    backgroundColor: '$white',
    opacity: '$opacity$400',
  },
});

export const Inner = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  backgroundColor: '$navy500',
});

//select
export const SelectRoot = styled(RadixSelect.Root, {
  flexShrink: 0,
});

export const SelectTrigger = styled(RadixSelect.SelectTrigger, {
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

export const SelectIcon = styled(RadixSelect.SelectIcon, {
  color: '$neutral800',
});

export const SelectContent = styled(RadixSelect.Content, {
  overflow: 'hidden',
  backgroundColor: '$background',
  borderRadius: '$1',
  boxShadow: '$1',
  borderColor: '$neutral400',
  borderStyle: '$solid',
  borderWidth: '$1',
});

export const SelectViewport = styled(RadixSelect.Viewport, {
  padding: 5,
});

export const StyledItem = styled(RadixSelect.Item, {
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

export const SelectLabel = styled(RadixSelect.Label, {
  fontSize: '$body2',
  lineHeight: '$body2',
  color: '$neutral900',

  [`.${darkTheme} &`]: {
    color: '$neutral100',
  },
});

export const SelectSeparator = styled(RadixSelect.Separator, {
  height: 1,
  backgroundColor: '$neutral600',
  margin: 5,
  [`.${darkTheme} &`]: {
    backgroundColor: '$neutral300',
  },
});

export const StyledItemIndicator = styled(RadixSelect.ItemIndicator, {
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

export const SelectScrollUpButton = styled(
  RadixSelect.ScrollUpButton,
  scrollButtonStyles,
);

export const SelectScrollDownButton = styled(
  RadixSelect.ScrollDownButton,
  scrollButtonStyles,
);

export const SelectGroup = RadixSelect.Group;