import { styled } from "../styles";

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
