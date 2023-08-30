import { styled } from '../styles';
import { Flex } from '.';
import { P } from '../text';

export const Divider = styled('hr', {
  borderWidth: '0',
  borderStyle: 'none',
  borderTopColor: '$neutral400',
  borderTopWidth: '2px',
  borderTopStyle: '$solid',
  marginBlock: '$2',
  flexGrow: '1',

  variants: {
    color: {
      white: {
        borderTopColor: '$white',
      },
      gray: {
        borderTopColor: '$neutral400',
      },
    },
  },
  defaultVariants: {
    color: 'gray',
  },
});

export const LabelledDivider = ({
  label,
  color,
}: {
  label: string;
  color?: 'white' | 'gray';
}) => {
  return (
    <Flex css={{ alignItems: 'center' }}>
      <Divider color={color} />
      <P
        css={{
          fontWeight: '$bold',
          color: '$neutral600',
        }}
      >
        {label}
      </P>
      <Divider color={color} />
    </Flex>
  );
};
