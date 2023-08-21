import { styled } from '../styles';

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
