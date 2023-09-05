import { ReactNode } from 'react';
import { Table, THead, TBody } from '.';

export const DataTable = ({
  renderHeadRow,
  renderBodyRows,
}: {
  renderHeadRow: () => ReactNode;
  renderBodyRows: () => ReactNode;
}) => {
  return (
    <Table>
      <THead>{renderHeadRow()}</THead>
      <TBody>{renderBodyRows()}</TBody>
    </Table>
  );
};
