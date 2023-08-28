import type { Meta, StoryObj } from '@storybook/react';
import { Explainer } from '..';
import { H1, P } from '../../text';
import { Button } from '../../buttons';
import { useState } from 'react';

const meta = {
  title: 'Collapsible/Explainer',
  component: Explainer,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'open me' },
      },
    },
    children: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: "i'm open!" },
      },
    },
  },
} satisfies Meta<typeof Explainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Default Case',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a augue a erat ornare efficitur. Nulla ultricies et risus sed aliquet. Sed aliquet bibendum leo, ut congue nulla fringilla id. Phasellus hendrerit felis quis lectus mattis, ac viverra sapien iaculis.',
  },
};

export const WithCTA: Story = {
  args: {
    text: 'This expander has a CTA inside of it',
  },
  render: (args) => {
    const [ipsum, setIpsum] = useState(false);
    return (
      <>
        <H1>LOREM{ipsum && ' IPSUM'}</H1>
        <Explainer {...args}>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            augue a erat ornare efficitur. Nulla ultricies et risus sed aliquet.
            Sed aliquet bibendum leo, ut congue nulla fringilla id. Phasellus
            hendrerit felis quis lectus mattis, ac viverra sapien iaculis.
          </P>
          <Button href="#" onClick={() => setIpsum(!ipsum)}>
            CLICK!
          </Button>
        </Explainer>
      </>
    );
  },
};
