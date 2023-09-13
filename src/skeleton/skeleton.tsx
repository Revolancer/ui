import { styled, loadingStyles } from '../styles';

const SkeletonText = styled('div', {
  ...loadingStyles,
  borderRadius: '$1',
  position: 'relative',
  width: '100%',
  variants: {
    type: {
      h1: {
        height: '$16',
      },
      h2: {
        height: '$13',
      },
      h3: {
        height: '$11',
      },
      h4: {
        height: '$8',
      },
      h5: {
        height: '$6',
      },
      p: {
        height: '$6',
      },
      span: {
        height: '$5',
      },
      tag: {
        height: '$8',
        width: '$15',
        borderRadius: '$3',
      },
      image: {
        height: '200px',
        overflow: 'hidden',
        borderRadius: '0px',
      },
    },
  },
  defaultVariants: {
    type: 'image',
  },
});

export { SkeletonText };
