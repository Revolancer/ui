import { styled } from '../styles';
import Image from 'next/image';

export const ProfileImageContainer = styled('div', {
  backgroundColor: '$neutral300',
  overflow: 'hidden',
  width: `128px`,
  height: `128px`,
  borderRadius: '$2',
});

export const ProfileImage = styled(Image, {
  objectFit: 'cover',
});

//user-profile-block-container
export const StyledBlocksContainer = styled('div', {
  width: '100%',
  maxWidth: '800px',
  marginInline: 'auto',
  fontSize: '$body1',
  lineHeight: '$body1',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  '& .image-block--stretched': {
    '& img': {
      width: '100%',
    },
  },
  '& figcaption': {
    color: '$neutral700',
    fontStyle: 'italic',
    textAlign: 'end',
  },
  '& table': {
    width: '100%',
    borderSpacing: '0',
    borderCollapse: 'collapse',
  },
  '& th': {
    border: '1px solid black',
    textAlign: 'center',
  },
  '& td': {
    border: '1px solid black',
    textAlign: 'center',
  },
  '& pre': {
    backgroundColor: '$neutral800',
    color: '$neutral100',
    padding: '$3',
  },
  '& blockquote': {
    background: '$neutral100',
    borderLeft: '10px solid $neutral600',
    marginInline: '10px',
    padding: '0.5em 10px',
    quotes: '“”‘’',
  },
  '& blockquote:before': {
    color: '$neutral800',
    content: 'open-quote',
    fontSize: '4em',
    lineHeight: '0.1em',
    marginRight: '0.25em',
    verticalAlign: '-0.4em',
  },
  '& blockquote p': {
    display: 'inline',
  },
  '& iframe': {
    display: 'block',
    width: '100%',
    maxHeight: '560px',
    marginInline: 'auto',
  },
});
