import { styled, darkTheme } from '../styles'

const Outer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '$2',
  borderRadius: '$3',
  borderColor: '$neutral400',
  borderStyle: '$solid',
  borderWidth: '$1',
});

const BG = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '$black',
  opacity: '$opacity$100',

  [`.${darkTheme} &`]: {
    backgroundColor: '$white',
    opacity: '$opacity$400',
  },
});

const Inner = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  backgroundColor: '$navy500',
});

export const Progress = ({ progress = 0 }: { progress?: number }) => {
  progress = Math.min(progress, 100);
  progress = Math.max(progress, 0);
  return (
    <Outer>
      <BG />
      <Inner css={{ width: `${progress}%` }} />
    </Outer>
  );
};
