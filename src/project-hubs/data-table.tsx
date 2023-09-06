import { ReactNode } from 'react';
import { Table, THead, TBody } from '.';

export const DataTable = ({
  roundedTop,
  roundedBottom,
  renderHeadRow,
  renderBodyRows,
}: {
  roundedTop?: boolean;
  roundedBottom?: boolean;
  renderHeadRow: () => ReactNode;
  renderBodyRows: () => ReactNode;
}) => {
  return (
    <Table roundedTop={roundedTop} roundedBottom={roundedBottom}>
      <THead>{renderHeadRow()}</THead>
      <TBody>{renderBodyRows()}</TBody>
    </Table>
  );
};
