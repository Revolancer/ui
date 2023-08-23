import { styled } from '../styles';

const FullWidth = styled('div', {
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

const HalfWidth = styled('div', {
  gridColumn: 'auto / span 4',

  '@md': {
    gridColumn: 'auto / span 6',
  },
});

const SideBar = styled('div', {
  gridColumn: 'auto / span 4',

  '@sm': {
    gridColumn: 'auto / span 8',
  },

  '@md': {
    gridColumn: 'auto / span 4',
  },
});

const MainContentWithSideBar = styled('div', {
  gridColumn: 'auto / span 4',

  '@sm': {
    gridColumn: 'auto / span 8',
  },
});

const ColumnLayout = styled('div', {
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

const TwoCols = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$6',
  '@sm': {
    gridTemplateColumns: '1fr 1fr',
  },
});

export {
  FullWidth,
  HalfWidth,
  SideBar,
  MainContentWithSideBar,
  ColumnLayout,
  TwoCols,
};
