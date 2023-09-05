import { styled } from '../styles';

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

export const TBody = styled('tbody', {
  backgroundColor: '$neutral100',
});

export const TD = styled('td', { padding: '$2' });
