import type { Meta, StoryObj } from '@storybook/react';
import { RoundedSquareImage } from '..';

const meta = {
  title: 'Users/RoundedSquareImage',
  component: RoundedSquareImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    url: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: '' },
      },
    },
    alt: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: '' },
      },
    },
    size: {
      options: ['small', 'medium', 'large', 'xl'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'xl' },
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
  },
} satisfies Meta<typeof RoundedSquareImage>;

export default meta;
type Story = StoryObj<typeof meta>;

/**This Storybook document is for the rounded square image component, which allows users to show an image in a rounded square container, often used to showcase the user's profile image. */
export const Default: Story = {
  args: {
    url: '',
    alt: 'an invisible sloth',
    size: 'xl',
    loading: false,
  },
};
