import type { Meta, StoryObj } from '@storybook/react';
import { Table, THead, TH, TR, TBody, TD } from '..';
import { Card, Flex } from '../../layout';

const meta = {
  title: 'ProjectHubs/Table',
  component: Table,
  tags: ['autodocs'],
  render: () => {
    interface User {
      User: string;
      'E-mail': string;
      Role: string;
    }

    const data: User[] = [
      { User: 'Karl Swanepoel', 'E-mail': 'karl@revolancer.com', Role: 'user' },
      { User: 'Skye Brady', 'E-mail': 'skye@revolancer.com', Role: 'admin' },
      { User: 'Ewa Gorka', 'E-mail': 'ewa@revolancer.com', Role: 'user' },
      {
        User: 'Ponch Salvador',
        'E-mail': 'ponch@revolancer.com',
        Role: 'admin',
      },
    ];

    return (
      <Card>
        <Flex column>
          <Table>
            <THead>
              <TR>
                {Object.keys(data[0]).map((key) => (
                  <TH>{key}</TH>
                ))}
              </TR>
            </THead>
            <TBody>
              {data.map((row) => (
                <TR>
                  {Object.values(row).map((entry: any) => (
                    <TD>{entry}</TD>
                  ))}
                </TR>
              ))}
            </TBody>
          </Table>
        </Flex>
      </Card>
    );
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

/**This Storybook document is for the table component, which provides users a tabulated view of fetched data. Use this to present data as a table. */
export const Default: Story = {};
