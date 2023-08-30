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
        defaultValue: 'Full Width',
      },
    },
    placeholder: {
      control: {
        type: 'boolean',
        defaultaValue: false,
      },
      description: 'For FullWidth component',
    },
    undecorated: {
      control: {
        type: 'boolean',
        defaultaValue: false,
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

/** This is the column layout at full width. See Docs for FullWidth component for more info. */
export const Columns: Story = {
  args: {
    layout: 'Full Width',
    placeholder: false,
    undecorated: false,
  },
};

/** This is the column layout at half width. See Docs for HalfWidth component for more info. */
export const HalfWidthColumns: Story = {
  args: {
    ...Columns.args,
    layout: 'Half Width',
  },
};

/** This column layout uses the MainContentWithSideBar and SideBar components in tandem. See Docs for MainContentWithSideBar and SideBar components for more info. */
export const SideBarsColumns: Story = {
  args: {
    ...Columns.args,
    layout: 'Side Bars',
  },
};

/** This layout uses a two column layout. See Docs for TwoCols component for more info. */
export const TwoColumns: Story = {
  args: {
    ...Columns.args,
    layout: 'Two Column',
  },
};
