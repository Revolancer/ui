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
  render: () => (
    <Flex>
      <TwoCols>
        <Card>
          <H3>Two Column Layout</H3>
          <Divider />
          <P>
            The Two Column layout splits the page layout into two even div
            components, this is useful when you want to present information in a
            50/50 split or to better compress lots of the same information in
            one page (as is the case for the discovery feed in the Swap
            Platform).
            <br />
            <br />
            Do note there is no need to wrap the TwoCols component in a
            ColumnLayout component, unlike the other layout components in the UI
            library.
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
