import { Meta, StoryObj } from '@storybook/react';
import { Card, StyledBlocksContainer } from '..';
import { H5, P } from '../../text';

const meta = {
  title: 'Layout/StyledBlocksContainer',
  component: StyledBlocksContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof StyledBlocksContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <StyledBlocksContainer>
        <H5>This is a Styled Block Container</H5>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a augue
          a erat ornare efficitur. Nulla ultricies et risus sed aliquet. Sed
          aliquet bibendum leo, ut congue nulla fringilla id. Phasellus
          hendrerit felis quis lectus mattis, ac viverra sapien iaculis.
        </P>
      </StyledBlocksContainer>
    );
  },
};
