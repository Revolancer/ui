import type { Meta, StoryObj } from '@storybook/react';
import { Price, CreditLabel } from '..';
import { Card, Divider, Flex } from '../../layout';
import { H4, Span } from '../../text';

const meta = {
  title: 'ProjectHubs/Price',
  component: Price,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  render: () => (
    <Card>
      <Flex column>
        <H4>EXT. WATTO'S JUNK YARD - BEHIND SHOP - DAY</H4>
        <Divider />
        <Span>
          <b>WATTO: </b>...Here it is...a T-14 hyperdrive generator!! Thee in
          luck, I'm the only one hereabouts who has one...but thee might as well
          buy a new ship. It would be cheaper, I think...Sying of which, how's
          thee going to pay for all this? Hyperdrive generator cost{' '}
          <Price>50,000</Price>
        </Span>
        <Span>
          <b>QUI-GON: </b>I have <CreditLabel>20,000</CreditLabel> Republic
          Credits
        </Span>
      </Flex>
    </Card>
  ),
} satisfies Meta<typeof Price>;

export default meta;
type Story = StoryObj<typeof meta>;

/**This Storybook document is for the price and creditLabel components, styled span components used for prices and to label credits. Often used on the projects hub page for price related text elements. */
export const Default: Story = {};
