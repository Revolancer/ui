import { Interactive } from 'react-interactive';
import { darkTheme, loadingStyles, styled } from '../styles';
import NextLink from 'next/link';

const styles = {
  variants: {
    role: {
      primary: {
        backgroundColor: '$pink500',
        color: '$white',
        borderWidth: '$1',
        borderStyle: '$solid',
        borderColor: '$pink500',

        '&:hover': {
          backgroundColor: '$pink700',
          borderColor: '$pink700',
        },
        '&:active': {
          backgroundColor: '$pink800',
          borderColor: '$pink800',
        },
      },
      secondary: {
        backgroundColor: '$white',
        color: '$neutral900',
        borderWidth: '$1',
        borderStyle: '$solid',
        borderColor: '$neutral400',

        '&:hover': {
          backgroundColor: '$neutral100',
        },
        '&:active': {
          backgroundColor: '$neutral300',
        },

        [`.${darkTheme} &`]: {
          backgroundColor: '$neutral900',
          color: '$neutral100',
          borderColor: '$neutral800',

          '&:hover': {
            borderColor: '$neutral700',
            backgroundColor: '$neutral800',
          },
          '&:active': {
            borderColor: '$neutral600',
            backgroundColor: '$neutral700',
          },
        },
      },
      dangerous: {
        backgroundColor: '$red500',
        color: '$white',
        borderWidth: '$1',
        borderStyle: '$solid',
        borderColor: '$red500',

        '&:hover': {
          backgroundColor: '$red700',
          borderColor: '$red700',
        },
        '&:active': {
          backgroundColor: '$red800',
          borderColor: '$red800',
        },
      },
    },
    size: {
      small: {
        paddingBlock: '$2',
        paddingInline: '$4',
      },
      medium: {
        paddingBlock: '$3',
        paddingInline: '$6',
      },
      large: {
        paddingBlock: '$4',
        paddingInline: '$7',
      },
    },
    disabled: {
      true: {
        pointerEvents: 'none',
        cursor: 'inherit',
      },
    },
    loading: {
      true: {
        pointerEvents: 'none',
        cursor: 'inherit',
        '&::before': {
          content: 'Button',
          color: 'transparent',
        },
        ...loadingStyles,
      },
    },
  },
  display: 'inline-block',
  borderRadius: '$1',
  textDecoration: 'none',
  fontSize: '$body1',
  fontWeight: '$semibold',
  height: 'max-content',
  width: 'max-content',
  boxShadow: '$2',
  textTransform: 'capitalize',
  compoundVariants: [
    {
      role: 'primary',
      disabled: true,
      css: {
        opacity: '$opacity$700',
        backgroundColor: '$pink200',
        borderColor: '$pink200',
      },
    },
    {
      role: 'dangerous',
      disabled: true,
      css: {
        opacity: '$opacity$700',
        backgroundColor: '$red200',
        borderColor: '$red200',
      },
    },
    {
      role: 'secondary',
      disabled: true,
      css: {
        opacity: '$opacity$500',
        [`.${darkTheme} &`]: {
          opacity: '$opacity$500',
        },
      },
    },
  ],
  defaultVariants: {
    role: 'primary',
    size: 'medium',
    disabled: false,
  },
};

const tertiaryStyles = {
  color: '$neutral700',
  display: 'inline',
  background: 'none',
  border: 'none',
  textDecoration: 'none',
  fontSize: '$body2',
  fontWeight: '$normal',
  height: 'max-content',
  width: 'max-content',
  transition: 'none',
  textTransform: 'capitalize',
  padding: 0,

  '&:hover': {
    color: '$navy500',
  },
  '&:active': {
    color: '$navy500',
    fontWeight: '$semibold',
    textDecoration: 'underline',
  },

  [`.${darkTheme} &`]: {
    color: '$white',

    '&:hover': {
      color: '$navy500',
    },
    '&:active': {
      color: '$navy500',
      fontWeight: '$semibold',
      textDecoration: 'underline',
    },
  },
  variants: {
    disabled: {
      true: {
        color: '$neutral900',
        opacity: '$opacity$500',
        pointerEvents: 'none',
        cursor: 'inherit',
        [`.${darkTheme} &`]: {
          color: '$neutral100',
          opacity: '$opacity$500',
        },
      },
    },
    normalCase: {
      true: {
        textTransform: 'none',
      },
    },
  },
};

const linkStyles = {
  color: '$pink500',
  display: 'inline',
  background: 'none',
  border: 'none',
  textDecoration: 'none',
  fontSize: '$body2',
  fontWeight: '$normal',
  height: 'max-content',
  width: 'max-content',
  transition: 'none',
  padding: 0,

  '&:hover': {
    color: '$pink600',
    textDecoration: 'underline',
  },
  '&:active': {
    color: '$pink600',
    fontWeight: '$semibold',
    textDecoration: 'underline',
  },
  variants: {
    disabled: {
      true: {
        color: '$neutral900',
        opacity: '$opacity$500',
        pointerEvents: 'none',
        cursor: 'inherit',
      },
    },
  },
};

const unstyledLinkStyles = {
  textDecoration: 'none',
  color: 'inherit',
  variants: {
    disabled: {
      true: {
        pointerEvents: 'none',
        cursor: 'inherit',
      },
    },
  },
};

export const Button = styled(NextLink, styles);
export const FormButton = styled(Interactive.Button, styles);
export const TertiaryButton = styled(NextLink, tertiaryStyles);
export const TertiaryFormButton = styled(Interactive.Button, tertiaryStyles);
export const Link = styled(NextLink, linkStyles);
export const UnstyledLink = styled(NextLink, unstyledLinkStyles);
