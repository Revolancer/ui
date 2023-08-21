import { styled, darkTheme } from '../styles';

//card
export const Card = styled('div', {
  borderWidth: '$1',
  borderStyle: '$solid',
  borderColor: '$borders',
  borderRadius: '$2',
  backgroundColor: '$background',
  padding: '$4',
  display: 'flex',
  gap: '$3',
  flexDirection: 'column',
  boxShadow: '$2',
  overflow: 'hidden',

  variants: {
    flat: {
      true: {
        boxShadow: 'none',
      },
    },
    unpadded: {
      true: {
        padding: '0',
      },
    },
  },
});

//columns
export const FullWidth = styled('div', {
  gridColumn: 'auto / span 4',

  '@sm': {
    gridColumn: 'auto / span 8',
  },
  '@md': {
    gridColumn: 'auto / span 12',
  },

  variants: {
    placeholder: {
      true: {
        height: '80vh',
        backgroundColor: '$neutral100',
        borderRadius: '$3',
        boxShadow: '$2',
      },
    },
  },
});

export const HalfWidth = styled('div', {
  gridColumn: 'auto / span 4',

  '@md': {
    gridColumn: 'auto / span 6',
  },
});

export const SideBar = styled('div', {
  gridColumn: 'auto / span 4',

  '@sm': {
    gridColumn: 'auto / span 8',
  },

  '@md': {
    gridColumn: 'auto / span 4',
  },
});

export const MainContentWithSideBar = styled('div', {
  gridColumn: 'auto / span 4',

  '@sm': {
    gridColumn: 'auto / span 8',
  },
});

export const ColumnLayout = styled('div', {
  maxWidth: '420px',
  minWidth: '328px',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  marginInline: 'auto',
  gap: '$4',
  position: 'relative',
  paddingInline: '1rem',

  '@sm': {
    minWidth: '480px',
    maxWidth: '480px',
    gridTemplateColumns: 'repeat(8, 1fr)',
    paddingInline: '0',
  },
  '@md': {
    minWidth: '756px',
    maxWidth: '756px',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: '$3',
  },
  '@lg': {
    minWidth: '880px',
    maxWidth: '880px',
    paddingInlineStart: '0',
    gap: '$6',
  },
  '@xl': {
    minWidth: '1128px',
    maxWidth: '1128px',
  },

  variants: {
    undecorated: {
      true: {
        '@sm': {
          maxWidth: '536px',
          paddingInlineStart: '0',
        },
        '@md': {
          maxWidth: '857px',
          gap: '$6',
        },
        '@lg': {
          maxWidth: '880px',
        },
        '@xl': {
          maxWidth: '1128px',
        },
      },
    },
  },
});

export const TwoCols = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$6',
  '@sm': {
    gridTemplateColumns: '1fr 1fr',
  },
});

//divider
export const Divider = styled('hr', {
  borderWidth: '0',
  borderStyle: 'none',
  borderTopColor: '$neutral400',
  borderTopWidth: '2px',
  borderTopStyle: '$solid',
  marginBlock: '$2',
  flexGrow: '1',

  variants: {
    color: {
      white: {
        borderTopColor: '$white',
      },
      gray: {
        borderTopColor: '$neutral400',
      },
    },
  },
  defaultVariants: {
    color: 'gray',
  },
});

//flex
export const Flex = styled('div', {
  display: 'flex',
  gap: '$$gap',
  variants: {
    column: {
      true: {
        flexDirection: 'column',
      },
    },
    wrap: {
      true: {
        flexWrap: 'wrap',
      },
    },
    gap: {
      0: {
        gap: '0px',
      },
      1: {
        gap: '$1',
      },
      2: {
        gap: '$2',
      },
      3: {
        gap: '$3',
      },
      4: {
        gap: '$4',
      },
      5: {
        gap: '$5',
      },
      6: {
        gap: '$6',
      },
      7: {
        gap: '$7',
      },
      8: {
        gap: '$8',
      },
      9: {
        gap: '$9',
      },
      10: {
        gap: '$10',
      },
      11: {
        gap: '$11',
      },
      12: {
        gap: '$12',
      },
      13: {
        gap: '$13',
      },
      14: {
        gap: '$14',
      },
      15: {
        gap: '$15',
      },
      16: {
        gap: '$16',
      },
    },
  },
  defaultVariants: {
    gap: 3,
  },
});

//layout
export const MainGridOuter = styled('div', {
  overflowX: 'hidden',
  overflowY: 'auto',
  width: '100%',
  height: '100vh',
  position: 'relative',
});

export const NavExpandedBodyHider = styled('div', {
  display: 'none',
  opacity: 0,
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: '$background',

  variants: {
    expanded: {
      true: {
        display: 'block',
        zIndex: '$3',
      },
    },
  },
});

export const MainGridInner = styled('div', {
  width: '100vw',
  position: 'absolute',
  top: 0,
  left: 0,
  paddingBlockEnd: '$16',

  '@sm': {
    width: 'calc(100vw - 72px)',
    transition: 'left 0.2s ease-in-out',
    left: '72px',
  },

  '@lg': {
    width: '100vw',
    left: 0,
  },

  variants: {
    expanded: {
      true: {
        '@sm': {
          left: '376px',
        },
      },
    },
  },
});

export const LoginHeader = styled('div', {
  height: '56px',
  backgroundColor: '$navy900',
  [`.${darkTheme} &`]: {
    backgroundColor: '$black',
  },
});

//utils
export const Div = styled('div', {});

export const NagBarContainer = styled('div', {
  width: '100%',
  backgroundColor: '$orange100',
  color: '$neutral900',
  borderStyle: '$solid',
  borderWidth: '0 0 $1 0',
  borderColor: '$orange200',
  padding: '$1',
});
