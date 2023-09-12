import { styled, loadingStyles } from '../styles';

const SkeletonText = styled('div', {
  ...loadingStyles,
  borderRadius: '$1',
  position: 'relative',
  variants: {
    type: {
      h1: {
        height: '$16',
        minWidth: '300px',
      },
      h2: {
        height: '$13',
        minWidth: '300px',
      },
      h3: {
        height: '$11',
        minWidth: '300px',
      },
      h4: {
        height: '$8',
        minWidth: '300px',
      },
      h5: {
        height: '$6',
        minWidth: '300px',
      },
      p: {
        height: '$6',
        minWidth: '300px',
      },
      span: {
        height: '$5',
        minWidth: '300px',
      },
      tag: {
        height: '$8',
        width: '$15',
        borderRadius: '$3',
      },
      image: {
        height: '200px',
        minWidth: '300px',
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
