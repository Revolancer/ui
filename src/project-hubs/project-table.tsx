import { styled } from '../styles';

export const Table = styled('table', {
  borderCollapse: 'collapse',
  overflow: 'hidden',
  width: '100%',
  borderStyle: '$solid',
  borderColor: '$neutral400',
  borderWidth: '$1',
  variants: {
    roundedTop: {
      true: {
        borderTopLeftRadius: '$1',
        borderTopRightRadius: '$1',
      },
    },
    roundedBottom: {
      true: {
        borderBottomLeftRadius: '$1',
        borderBottomRightRadius: '$1',
      },
    },
  },
});

export const THead = styled('thead', {
  backgroundColor: '$neutral300',
});

export const TH = styled('th', {
  padding: '$2',
  textAlign: 'start',
  borderStyle: '$solid',
  borderColor: '$neutral400',
  borderWidth: '$1',
});

export const TR = styled('tr', {});

export const TD = styled('td', {
  padding: '$2',
  borderStyle: '$solid',
  borderColor: '$neutral400',
  borderWidth: '$1',
});

export const TBody = styled('tbody', {
  backgroundColor: '$neutral100',
});
