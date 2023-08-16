import { styled } from '../styles';

//active-projects-table
export const Table = styled('table', {
  borderCollapse: 'collapse',
  overflow: 'hidden',
  width: '100%',
  borderStyle: '$solid',
  borderColor: '$neutral300',
  borderWidth: '$1',
});

export const THead = styled('thead', {
  backgroundColor: '$neutral300',
});

export const TH = styled('th', {
  padding: '$2',
  textAlign: 'start',
});

export const TR = styled('tr', {});

export const TD = styled('td', { padding: '$2' });

//wallet
export const Price = styled('span', {
  color: '$pink500',
  fontFamily: '$heading',
  fontWeight: '$bold',
});
export const CreditLabel = styled('span', {
  fontSize: '$body1',
  fontFamily: '$heading',
  fontWeight: '$bold',
});
