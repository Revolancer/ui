import { styled } from '../styles';

const h1Style = {
  fontSize: '$h1m',
  lineHeight: '$h1m',
  fontWeight: '$bold',
  fontFamily: '$heading',

  '@sm': {
    fontSize: '$h1',
    lineHeight: '$h1',
  },
};

const h2Style = {
  fontSize: '$h2m',
  lineHeight: '$h2m',
  fontWeight: '$bold',
  fontFamily: '$heading',

  '@sm': {
    fontSize: '$h2',
    lineHeight: '$h2',
  },
};

const h3Style = {
  fontSize: '$h3m',
  lineHeight: '$h3m',
  fontWeight: '$medium',
  fontFamily: '$heading',

  '@sm': {
    fontSize: '$h3',
    lineHeight: '$h3',
  },
};

const h4Style = {
  fontSize: '$h4m',
  lineHeight: '$h4m',
  fontWeight: '$normal',
  fontFamily: '$heading',

  '@sm': {
    fontSize: '$h4',
    lineHeight: '$h4',
  },
};

const h5Style = {
  fontSize: '$h5',
  lineHeight: '$h5',
  fontWeight: '$bold',
  fontFamily: '$heading',
  textTransform: 'uppercase',
};

export const H1 = styled('h1', h1Style);
export const H2 = styled('h2', h2Style);
export const H3 = styled('h3', h3Style);
export const H4 = styled('h4', h4Style);
export const H5 = styled('h5', h5Style);
export const P = styled('p');
export const Span = styled('span');
