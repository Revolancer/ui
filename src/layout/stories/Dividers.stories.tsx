import { Meta, StoryObj } from '@storybook/react';
import { H3, H4, P } from '../../text';
import { Divider, LabelledDivider } from '../divider';
import { useState } from 'react';
import { FormButton } from '../../buttons';

const meta = {
  title: 'Layout/Dividers',
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['white', 'gray'],
      control: {
        type: 'radio',
        defaultValue: 'gray',
      },
    },
    label: {
      control: {
        type: 'text',
        defaultValue: 'label',
      },
    },
  },
} satisfies Meta<typeof Divider | typeof LabelledDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

/** This Storybook document lets you see the appearances of the Divider and Labelled Divider components in their intended layouts. Simply press the button to switch between the normal and labelled dividers. */
export const Dividers: Story = {
  render: (args) => {
    const [labels, setLabels] = useState(false);

    const renderLabel = labels ? (
      <LabelledDivider label={''} {...args} />
    ) : (
      <Divider {...args} />
    );

    return (
      <>
        <H3>{labels && 'Labelled '}Dividers</H3>
        {renderLabel}
        <H4>Chapter 1</H4>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a augue
          a erat ornare efficitur. Nulla ultricies et risus sed aliquet. Sed
          aliquet bibendum leo, ut congue nulla fringilla id. Phasellus
          hendrerit felis quis lectus mattis, ac viverra sapien iaculis.
        </P>
        {renderLabel}
        <H4>Chapter 2</H4>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a augue
          a erat ornare efficitur. Nulla ultricies et risus sed aliquet. Sed
          aliquet bibendum leo, ut congue nulla fringilla id. Phasellus
          hendrerit felis quis lectus mattis, ac viverra sapien iaculis.
        </P>
        {renderLabel}
        <FormButton onClick={() => setLabels(!labels)}>
          LABELS {labels ? 'OFF' : 'ON'}
        </FormButton>
      </>
    );
  },
};
