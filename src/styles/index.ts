import { createStitches } from '@stitches/react';
import { Montserrat } from 'next/font/google';
import { Source_Sans_3 } from 'next/font/google';

const headfont = Montserrat({
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const bodyfont = Source_Sans_3({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
});

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      black: '#000000',
      neutral900: '#212529',
      neutral800: '#343A40',
      neutral700: '#495057',
      neutral600: '#6C757D',
      neutral500: '#ADB5BD',
      neutral400: '#CED4DA',
      neutral300: '#DEE2E6',
      neutral200: '#E9ECEF',
      neutral100: '#F8F9FA',
      white: '#ffffff',
      navy900: '#0D253A',
      navy800: '#164064',
      navy700: '#255A88',
      navy600: '#3474AD',
      navy500: '#4E8EC6',
      navy400: '#77A6CF',
      navy300: '#9FBFDB',
      navy200: '#C5D7E7',
      navy100: '#EAF0F6',
      pink900: '#33001C',
      pink800: '#660038',
      pink700: '#990053',
      pink600: '#CC006F',
      pink500: '#FF008B',
      pink400: '#FF3DA7',
      pink300: '#FF75C0',
      pink200: '#FFB3DC',
      pink100: '#FFEBF6',
      yellow900: '#332E00',
      yellow800: '#665E00',
      yellow700: '#998A00',
      yellow600: '#CCB800',
      yellow500: '#FFE600',
      yellow400: '#FFEC3D',
      yellow300: '#FFF175',
      yellow200: '#FFF7B3',
      yellow100: '#FFFDEB',
      red900: '#63171B',
      red800: '#822727',
      red700: '#982C2C',
      red600: '#C53030',
      red500: '#E53E3E',
      red400: '#F56565',
      red300: '#FC8181',
      red200: '#FEB2B2',
      red100: '#FFEBEB',
      orange900: '#652B19',
      orange800: '#7B341E',
      orange700: '#9C4221',
      orange600: '#C05621',
      orange500: '#DD6B20',
      orange400: '#ED8936',
      orange300: '#F6AD55',
      orange200: '#FBD38D',
      orange100: '#FFF7EB',
      green900: '#1C4532',
      green800: '#22543D',
      green700: '#276749',
      green600: '#25855A',
      green500: '#38A169',
      green400: '#48BB17',
      green300: '#68D391',
      green200: '#9AE6B4',
      green100: '#EDFCF2',
      background: '$white',
      text: '$black',
      borders: '$neutral200',
    },
    opacity: {
      900: '100%',
      800: '80%',
      700: '64%',
      600: '56%',
      500: '40%',
      400: '24%',
      300: '16%',
      200: '8%',
      100: '4%',
      0: '0%',
    },
    space: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      5: '16px',
      6: '20px',
      7: '24px',
      8: '28px',
      9: '32px',
      10: '36px',
      11: '40px',
      12: '44px',
      13: '48px',
      14: '52px',
      15: '56px',
      16: '60px',
      17: '64px',
    },
    sizes: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      5: '16px',
      6: '20px',
      7: '24px',
      8: '28px',
      9: '32px',
      10: '36px',
      11: '40px',
      12: '44px',
      13: '48px',
      14: '52px',
      15: '56px',
      16: '60px',
      17: '64px',
    },
    fontSizes: {
      h1: '60px',
      h1m: '48px', //Mobile sizes
      h2: '48px',
      h2m: '40px',
      h3: '40px',
      h3m: '32px',
      h4: '28px',
      h4m: '24px',
      h5: '18px',
      body1: '18px',
      body2: '16px',
    },
    lineHeights: {
      h1: '72px',
      h1m: '60px', //Mobile sizes
      h2: '64px',
      h2m: '48px',
      h3: '48px',
      h3m: '40px',
      h4: '40px',
      h4m: '32px',
      h5: '28px',
      body1: '28px',
      body2: '24px',
    },
    fonts: {
      heading: headfont.style.fontFamily,
      body: bodyfont.style.fontFamily,
    },
    fontWeights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    radii: {
      1: '8px',
      2: '12px',
      3: '16px',
    },
    borderStyles: {
      solid: 'solid',
    },
    borderWidths: {
      1: '1px',
      2: '2px',
    },
    zIndices: {
      0: 0,
      1: 10,
      2: 20,
      3: 30,
      4: 40,
      modalbg: 990,
      modal: 1000,
    },
    shadows: {
      1: '0px 4px 4px 0px rgba(33,37,41,0.25), 0px 1px 1px 0px rgba(33,37,41,0.36)',
      2: '0px 2px 2px 0px rgba(33,37,41,0.08), 0px 0px 1px 0px rgba(33,37,41,0.08)',
    },
    transitions: {
      smoothly: 'all 0.2s ease-in-out',
    },
  },
  media: {
    xl: '(min-width: 1440px)',
    lg: '(min-width: 1280px)',
    md: '(min-width: 905px)',
    sm: '(min-width: 600px)',
  },
});

export const darkTheme = createTheme({
  colors: {
    background: '$neutral900',
    text: '$white',
    borders: '$neutral800',
  },
  shadows: {
    1: '0px 4px 4px 0px rgba(108,117,125,0.25), 0px 1px 1px 0px rgba(108,117,125,0.36)',
    2: '0px 2px 2px 0px rgba(108,117,125,0.08), 0px 0px 1px 0px rgba(108,117,125,0.08)',
  },
});

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  '*': {
    margin: 0,
  },
  'html, body': {
    height: '100%',
  },
  body: {
    fontFamily: '$body',
    fontSize: '$body2',
    lineHeight: 1.5,
    fontSmooth: 'antialiased',
  },
  'img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%',
  },
  'input, button, textarea, select': {
    font: 'inherit',
  },
  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word',
  },
  '#root, #__next': {
    isolation: 'isolate',
  },
  [`#mainctx`]: {
    backgroundColor: '$background',
    color: '$text',
    minHeight: '100vh',
  },
});

const loadingFrames = keyframes({
  '0%': {
    backgroundPosition: '-480px 0',
  },
  '100%': {
    backgroundPosition: '480px 0',
  },
});

export const loadingStyles = {
  animationDuration: '2.4s',
  animationFillMode: 'forwards',
  animationIterationCount: 'infinite',
  animationName: `${loadingFrames}`,
  animationTimingFunction: 'linear',
  backgroundColor: '$neutral300',
  borderColor: '$neutral300',
  background:
    'linear-gradient(to right, $neutral300 0%, $neutral200 10%, $neutral300 20%)',
  backgroundSize: '1000px 640px',

  position: 'relative',
};