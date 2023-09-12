import { Meta, StoryObj } from '@storybook/react';
import { SkeletonText } from '..';
import { Card, Flex } from '../../layout';
import { P } from '../../text';
import { useState } from 'react';
import { Switch } from '../../buttons';
import { RoundedSquareImage } from '../../user';
import { styled } from '../../styles';
import Image from 'next/image';

const meta = {
  title: 'skeleton/SkeletonText',
  component: SkeletonText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'span', 'tag'],
      control: {
        type: 'select',
      },
      table: { defaultValue: { summary: 'h4' } },
    },
  },
  render: (args) => {
    const [loading, setLoading] = useState(true);

    const PostImageContainer = styled('div', {
      backgroundColor: '$neutral300',
      width: `100%`,
      height: `200px`,
    });

    const PostImage = styled(Image, {
      objectFit: 'cover',
      width: '100%',
    });

    const TagContainer = styled('div', {
      color: '$pink500',
      padding: '$1 $4',
      borderRadius: '100px',
      background: '$pink100',
    });

    const SkeletonComponent = () => {
      return (
        <>
          <SkeletonText type="image" />
          <Flex column gap={4} css={{ padding: '$6' }}>
            <SkeletonText type="p" />
            <Flex>
              <RoundedSquareImage size="medium" loading />
              <SkeletonText type="p" />
            </Flex>
            <Flex>
              <SkeletonText type="tag" />
              <SkeletonText type="tag" />
              <SkeletonText type="tag" />
            </Flex>
            <SkeletonText type="p" />
            <SkeletonText type="p" />
            <SkeletonText type="p" />
          </Flex>
        </>
      );
    };

    const Component = () => {
      return (
        <>
          <PostImageContainer>
            <PostImage
              src=""
              alt="LOADER FOR IMAGE"
              width={360}
              height={200}
              unoptimized
            />
          </PostImageContainer>
          <Flex column gap={4} css={{ padding: '$6' }}>
            <P css={{ fontWeight: '$bold' }}>TITLE OF THE CARD</P>
            <Flex>
              <RoundedSquareImage size={'medium'} />
              <P>NAME OF THE PERSON</P>
            </Flex>
            <Flex>
              <TagContainer>Tags</TagContainer>
              <TagContainer>Horses</TagContainer>
              <TagContainer>Mojo Dojo Casa House</TagContainer>
              <TagContainer>Diner style scrambled eggs</TagContainer>
            </Flex>
            <P>
              lorem ipsum i dont know the rest of the lyrics to this. I'm just
              riffing on what the last guy said, a la improv y'know? Like, how improv relies on "yes, and..?"
            </P>
          </Flex>
        </>
      );
    };

    return (
      <Flex column>
        <Card unpadded css={{ width: '650px' }}>
          {loading ? <SkeletonComponent /> : <Component />}
        </Card>

        <Switch
          checked={loading}
          handleCheckedChange={() => setLoading(!loading)}
        >
          Loading
        </Switch>
      </Flex>
    );
  },
} satisfies Meta<typeof SkeletonText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
