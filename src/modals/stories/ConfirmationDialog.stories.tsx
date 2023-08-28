import { Meta, StoryObj } from "@storybook/react";
import { ConfirmationDialog } from "..";
import { Flex } from "../../layout";
import { H3 } from "../../text";

const meta = {
  title: 'Modals/ConfirmationDialog',
  component: ConfirmationDialog,
  tags: ['autodocs'],
  argTypes: {
    onAccept: {},
    onReject: {},
    confirmationMessage: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'Are you sure you want to do that?' },
      },
    },
    labelAccept: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'Confirm' },
      },
    },
    labelReject: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'Cancel' },
      },
    },
    dangerous: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    label: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'Open Modal' },
      },
    },
    title: {
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'Are you sure?' },
      },
    },
  },
} satisfies Meta<typeof ConfirmationDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onAccept: () => {},
    onReject: () => {},
    confirmationMessage: 'Are you sure you want to do that?',
    labelAccept: 'Confirm',
    labelReject: 'Cancel',
    dangerous: false,
    label: 'Open Modal',
    title: 'Are you sure?',
  },
  render: (args) => {
    return (
      <>
        <Flex css={{ minHeight: '20vh' }}>
          <H3>This is a confirmation modal</H3>
        </Flex>
        <ConfirmationDialog {...args} />
      </>
    );
  },
};
