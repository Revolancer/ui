import { styled } from '../styles';

const Div = styled('div', {});

const Flex = styled('div', {
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

export { Div, Flex };
