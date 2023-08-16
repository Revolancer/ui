import { styled } from '../styles';
import Image from 'next/image';

//unread indicator styles
export const Container = styled('div', {
  display: 'inline-block',
  width: '1rem',
  height: '1rem',
  padding: '0.2rem',
  paddingTop: '0.4rem',
  paddingBottom: '0',
});

export const Dot = styled('div', {
  width: '100%',
  height: '100%',
  backgroundColor: '$pink500',
  borderRadius: '100%',
});

//thread list entry styles
export const ProfileImageContainer = styled('div', {
  backgroundColor: '$neutral300',
  overflow: 'hidden',
  width: `48px`,
  height: `48px`,
  borderRadius: '$2',
});

export const ProfileImage = styled(Image, {
  objectFit: 'cover',
});