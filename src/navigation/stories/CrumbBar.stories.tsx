import type { Meta, StoryObj } from '@storybook/react';
import { Crumb, CrumbBar } from '..';

const meta = {
  title: 'Navigation/CrumbBar',
  component: CrumbBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => (
    <CrumbBar>
      <Crumb href="/">Crumb</Crumb>
      <Crumb href="/">Crumb Divider</Crumb>
      <Crumb href="/" active>
        Crumb Bar
      </Crumb>
    </CrumbBar>
  ),
} satisfies Meta<typeof CrumbBar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**This Storybook document is for the crumb bar component, which allows users to see the history of pages you have visited. Use this for app features that may require more than one page to house features. */
export const Default: Story = {};
