import { Meta, StoryObj } from '@storybook/react';
import { Card, Flex, TwoCols, Divider } from '../..';
import { H3, P } from '../../../text';

const meta = {
  title: 'Layout/Columns/TwoCols',
  component: TwoCols,
} satisfies Meta<typeof TwoCols>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTwoCols: Story = {
  render: (args) => (
    <Flex>
      <TwoCols {...args}>
        <Card>
          <H3>Two Column Layout</H3>
          <Divider />
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            augue a erat ornare efficitur. Nulla ultricies et risus sed aliquet.
            Sed aliquet bibendum leo, ut congue nulla fringilla id. Phasellus
            hendrerit felis quis lectus mattis, ac viverra sapien iaculis.
          </P>
        </Card>
        <Card>
          <H3>Two Column Layout</H3>
          <Divider />
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            augue a erat ornare efficitur. Nulla ultricies et risus sed aliquet.
            Sed aliquet bibendum leo, ut congue nulla fringilla id. Phasellus
            hendrerit felis quis lectus mattis, ac viverra sapien iaculis.
          </P>
        </Card>
      </TwoCols>
    </Flex>
  ),
};
