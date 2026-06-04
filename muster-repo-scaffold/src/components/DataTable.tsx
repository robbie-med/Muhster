import type { ReactNode } from 'react';

export type Column<T> = {
  header: string;
  render: (row: T) => ReactNode;
};

type Props<T> = {
  caption: string;
  columns: Column<T>[];
  rows: T[];
  keyForRow: (row: T) => string;
};

export function DataTable<T>({ caption, columns, rows, keyForRow }: Props<T>) {
  return (
    <div className="table-wrap">
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>{columns.map((column) => <th key={column.header}>{column.header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={keyForRow(row)}>{columns.map((column) => <td key={column.header}>{column.render(row)}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
