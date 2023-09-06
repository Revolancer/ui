import type { Meta, StoryObj } from '@storybook/react';
import { CrumbDivider } from '..';

const meta = {
  title: 'Navigation/CrumbDivider',
  component: CrumbDivider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => <CrumbDivider />,
} satisfies Meta<typeof CrumbDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

/**This Storybook document is for the crumb divider component, which divides different crumbs in the crumb bar. Use this for app features that may require more than one page to house features. */
export const Default: Story = {};
