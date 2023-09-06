import type { Meta, StoryObj } from '@storybook/react';
import { InputInner, InputOuter, PasswordReveal } from '../..';
import { useState } from 'react';

const meta = {
  title: 'Forms/FormTypes/PasswordReveal',
  component: PasswordReveal,
  parameters: {
    layout: 'centered',
  },
  render: () => {
    const [revealed, setRevealed] = useState(false);
    return (
      <InputOuter>
        <InputInner
          type={revealed ? 'text' : 'password'}
          placeholder="enter password"
        />
        <PasswordReveal
          revealed={revealed}
          onClick={() => setRevealed(!revealed)}
        />
      </InputOuter>
    );
  },
} satisfies Meta<typeof PasswordReveal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
