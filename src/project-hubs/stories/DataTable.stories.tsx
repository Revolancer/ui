import type { Meta, StoryObj } from '@storybook/react';
import { DataTable, TR, TH, TD } from '..';
import { H5, H4, H3 } from '../../text';
import { TertiaryFormButton } from '../../buttons';
import { useState } from 'react';
import { RevoModal } from '../../modals';
import { Divider, Flex } from '../../layout';

const meta = {
  title: 'ProjectHubs/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    roundedTop: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    roundedBottom: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    renderHeadRow: {},
    renderBodyRows: {},
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

/**The Data Table component is a reusable Table component. The header and body rows are rendered via render props, simply define how you want to render the head using the renderHeadRow prop, and the body using the renderBodyRows prop. */
export const Default: Story = {
  args: {
    roundedTop: false,
    roundedBottom: false,
    renderHeadRow: () => <></>,
    renderBodyRows: () => <></>,
  },
  render: ({ renderHeadRow, renderBodyRows, ...args }) => {
    interface User {
      user: string;
      email: string;
      role: string;
    }
    const data: User[] = [
      {
        user: 'Karl Swanepoel',
        email: 'karl@revolancer.com',
        role: 'user',
      },
      {
        user: 'Skye Brady',
        email: 'skye@revolancer.com',
        role: 'admin',
      },
      {
        user: 'Ponch Salvador',
        email: 'ponch@revolancer.com',
        role: 'admin',
      },
      {
        user: 'Stacy Fakename',
        email: 'stacy@mentopolis.com',
        role: 'user',
      },
    ];

    const [filterType, setFilterType] = useState('');
    const [filteredArr, setFilteredArr] = useState(data);

    const handleFilter = (filter: string, close: () => void) => {
      const newArr = data.filter((item) =>
        filter === 'all' ? item : item.role === filter,
      );
      setFilteredArr(newArr);
      setFilterType('');
      close();
    };

    return (
      <>
        <DataTable
          renderHeadRow={() => {
            return (
              <TR>
                <TH>
                  <H5>user</H5>
                </TH>
                <TH>
                  <H5>email</H5>
                </TH>
                <TH>
                  <TertiaryFormButton
                    onClick={() => {
                      setFilterType('role');
                    }}
                  >
                    <H5>role</H5>
                  </TertiaryFormButton>
                </TH>
              </TR>
            );
          }}
          renderBodyRows={() => {
            return (
              <>
                {filteredArr.map((row) => {
                  return (
                    <TR>
                      <TD>
                        <RevoModal
                          openOnTrigger={false}
                          showModalOpenCTA
                          showCloseIcon
                          modalCTALabel={row.user}
                          renderChildren={({ close }) => {
                            return (
                              <Flex
                                wrap
                                css={{
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <H3>MY NAME {row.user.toUpperCase()}</H3>
                              </Flex>
                            );
                          }}
                        />
                      </TD>
                      {Object.values(row).map(
                        (item) => item !== row.user && <TD>{item}</TD>,
                      )}
                    </TR>
                  );
                })}
              </>
            );
          }}
          {...args}
        />
        <RevoModal
          openOnTrigger={filterType !== ''}
          renderChildren={({ close }) => {
            const roles = ['admin', 'user', 'all'];
            return (
              <Flex column>
                <H4>Filter by {filterType}</H4>
                <Divider />
                {roles.map((role) => (
                  <TertiaryFormButton
                    role="secondary"
                    onClick={() => handleFilter(role, close)}
                  >
                    <H5>{role}</H5>
                  </TertiaryFormButton>
                ))}
              </Flex>
            );
          }}
        />
      </>
    );
  },
};
