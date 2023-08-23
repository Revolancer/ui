import { styled, darkTheme } from '../styles';

const InputOuter = styled('div', {
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

const InputInner = styled('input', {
  border: 'none',
  background: 'none',
  flexGrow: '1',
  color: 'inherit',

  '&:focus': {
    border: 'none',
    outline: 'none',
  },
});

const TextAreaInner = styled('textarea', {
  border: 'none',
  background: 'none',
  flexGrow: '1',
  color: 'inherit',

  '&:focus': {
    border: 'none',
    outline: 'none',
  },
});

export { InputOuter, InputInner, TextAreaInner };
