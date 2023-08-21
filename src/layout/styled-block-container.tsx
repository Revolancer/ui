import { styled } from '../styles';

export const StyledBlocksContainer = styled('div', {
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
  '& ul': {
    marginBlock: '$3',
  },
  '& ol': {
    marginBlock: '$3',
  },
  '& p': {
    marginBlock: '$3',
  },
  '& table': {
    width: '100%',
    borderSpacing: '0',
    borderCollapse: 'collapse',
    marginBlock: '$3',
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
    margin: '1.5em 10px',
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
    maxWidth: '100%',
    marginInline: 'auto',
  },
});

export const cleanBlockData = (data?: string) => {
  try {
    if (!data) {
      return {
        time: 1682956618189,
        blocks: [],
        version: '2.26.5',
      };
    }
    return JSON.parse(data)?.version ?? false
      ? JSON.parse(data)
      : {
          time: 1682956618189,
          blocks: [],
          version: '2.26.5',
        };
  } catch (err) {
    return {
      time: 1682956618189,
      blocks: [],
      version: '2.26.5',
    };
  }
};
