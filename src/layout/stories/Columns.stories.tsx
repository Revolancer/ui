import { Meta, StoryObj } from '@storybook/react';
import {
  FullWidth,
  HalfWidth,
  SideBar,
  MainContentWithSideBar,
  ColumnLayout,
  TwoCols,
  Card,
  Divider,
  Flex,
} from '..';
import { H3, P } from '../../text';

const Template = ({
  layout,
  children,
  placeholder,
  undecorated,
}: {
  layout: string;
  children: any;
  placeholder?: boolean;
  undecorated?: boolean;
}) => {
  const renderLayout = (layout: string) => {
    switch (layout) {
      case 'Full Width': {
        return (
          <ColumnLayout undecorated={undecorated}>
            <FullWidth placeholder={placeholder}>{children}</FullWidth>
            <FullWidth placeholder={placeholder}>{children}</FullWidth>
          </ColumnLayout>
        );
      }
      case 'Half Width': {
        return (
          <ColumnLayout undecorated={undecorated}>
            <HalfWidth>{children}</HalfWidth>
            <HalfWidth>{children}</HalfWidth>
          </ColumnLayout>
        );
      }
      case 'Side Bars': {
        return (
          <ColumnLayout undecorated={undecorated}>
            <MainContentWithSideBar>{children}</MainContentWithSideBar>
            <SideBar>{children}</SideBar>
          </ColumnLayout>
        );
      }
      case 'Two Column': {
        return (
          <TwoCols>
            {children}
            {children}
          </TwoCols>
        );
      }
      default: {
        return <>{children}</>;
      }
    }
  };
  return renderLayout(layout);
};

const meta = {
  title: 'Layout/Columns',
  tags: ['autodocs'],
  component: Template,
  argTypes: {
    layout: {
      options: ['Full Width', 'Half Width', 'Side Bars', 'Two Column'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'Full Width' },
      },
    },
    placeholder: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
      description: 'For FullWidth component',
    },
    undecorated: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
      description: 'For ColumnLayout component',
    },
  },
  render: ({ layout, ...args }) => {
    const children = (layout: string) => {
      return (
        <Card>
          <H3>{layout}</H3>
          <Divider />
          <P>
            <b>This is using a {layout.toLowerCase()} layout.</b> Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Duis a augue a erat
            ornare efficitur. Nulla ultricies et risus sed aliquet. Sed aliquet
            bibendum leo, ut congue nulla fringilla id. Phasellus hendrerit
            felis quis lectus mattis, ac viverra sapien iaculis.
          </P>
        </Card>
      );
    };

    return (
      <Flex>
        <Template layout={layout} {...args}>
          {children(layout)}
        </Template>
      </Flex>
    );
  },
} satisfies Meta<typeof Template>;

export default meta;
type Story = StoryObj<typeof meta>;

/** This document allows you to see the implementation and appearance of different layout components available in the Revolancer UI library. for more information about each component, please refer to their respective storybook docs. */
export const Columns: Story = {
  args: {
    layout: 'Full Width',
    placeholder: false,
    undecorated: false,
  },
};
