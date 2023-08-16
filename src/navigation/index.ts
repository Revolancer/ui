import Link from 'next/link';
import { styled, darkTheme } from '../styles';

//Crumbs
export const Crumb = styled(Link, {
  color: '$neutral600',
  textDecoration: 'none',
  fontSize: '$body2',
  lineHeight: '$body2',

  '&:hover': {
    color: '$black',
  },

  variants: {
    active: {
      true: {
        color: '$black',
        fontWeight: '$bold',
      },
    },
  },
});

export const CrumbBarContainer = styled('div', {
  display: 'flex',
  gap: '$4',
  padding: '$6',
  paddingBottom: '0',
});

//Main-nav
export const Container = styled('div', {
  backgroundColor: '$navy900',
  top: 0,
  left: 0,
  position: 'sticky',
  color: '$white',
  variants: {
    expanded: {
      true: {
        '@sm': {
          width: '360px',
        },
      },
    },
  },
  zIndex: '$4',

  '@sm': {
    width: '72px',
    position: 'fixed',
    transition: 'width 0.2s ease-in-out',
  },

  [`.${darkTheme} &`]: {
    backgroundColor: '$black',
  },
});

export const DesktopItemContainer = styled('div', {
  display: 'none',

  '@sm': {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    padding: '$5',
  },

  variants: {
    expanded: {
      true: {
        alignItems: 'baseline',
      },
    },
  },
});

export const NavLink = styled(Link, {
  color: '$white',
  fontSize: '$body1',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  variants: {
    expanded: {
      false: {
        justifyContent: 'center',
      },
    },
  },
});

//mobile-nav
export const MobileTopbarContainer = styled('div', {
  display: 'flex',
  width: '100%',
  padding: '$5',
  height: '56px',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const MobileItemContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '56px',
  transition: 'height 0.2s ease-in-out',
  backgroundColor: '$navy900',
  '@sm': {
    display: 'none',
  },

  variants: {
    expanded: {
      true: {
        height: '100dvh',
        width: '100vw',
        overflowY: 'scroll',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: '$4',
      },
    },
  },
  [`.${darkTheme} &`]: {
    backgroundColor: '$black',
  },
});

//tabLink
export const TabLink = styled(Link, {
  fontSize: '$body2',
  color: '$neutral600',
  textDecoration: 'none',
  display: 'block',
  paddingInline: '$5',
  paddingBlock: '$3',

  variants: {
    active: {
      true: {
        color: '$black',
        fontWeight: '$medium',
        borderStyle: 'none',
        borderWidth: '$2',
        borderColor: '$black',
        borderBlockEndStyle: 'solid',
      },
    },
  },
});