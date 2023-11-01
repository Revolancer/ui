import { styled, loadingStyles } from '../styles';
import Image from 'next/image';

export const RoundedSquareImage = ({
  url = '',
  size = 'xl',
  alt = '',
  loading = false,
}: {
  url?: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large' | 'xl';
  loading?: boolean;
}) => {
  const sizePixels = (size: 'small' | 'medium' | 'large' | 'xl') => {
    switch (size) {
      case 'small':
        return 36;
      case 'medium':
        return 48;
      case 'large':
        return 64;
      case 'xl':
        return 128;
    }
  };

  const width = sizePixels(size);

  const ProfileImageContainer = styled('div', {
    backgroundColor: '$neutral300',
    overflow: 'hidden',
    width: `${width}px`,
    height: `${width}px`,
    flexShrink: '0',
    variants: {
      size: {
        small: {
          borderRadius: '$1',
        },
        medium: {
          borderRadius: '$1',
        },
        large: {
          borderRadius: '$1',
        },
        xl: {
          borderRadius: '$2',
        },
      },
      loading: {
        true: {
          ...loadingStyles,
        },
      },
    },
  });

  const ProfileImage = styled(Image, {
    objectFit: 'cover',
  });

  return (
    <ProfileImageContainer size={size} loading={loading}>
      {!loading && url && url != '' && (
        <>
          <ProfileImage
            src={url}
            height={width}
            width={width}
            alt={alt}
          ></ProfileImage>
        </>
      )}
    </ProfileImageContainer>
  );
};