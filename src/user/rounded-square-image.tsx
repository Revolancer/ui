import { ProfileImage } from ".";
import { styled } from "../styles";

export const RoundedSquareImage = ({
  url = '',
  size = 'xl',
  alt = '',
}: {
  url?: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large' | 'xl';
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
    },
  });

  return (
    <ProfileImageContainer size={size}>
      {url && url != '' && (
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
