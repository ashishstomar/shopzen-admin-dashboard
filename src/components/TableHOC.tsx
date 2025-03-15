import { useTable, Column, TableOptions } from "react-table";

function TableHOC<T extends Object>(
  columns: Column<T>[],
  data: T[],
  containerClassname: string,
  heading: string
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
    };

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable(options);

    return (
      <div className={containerClassname}>
        <h2 className="heading">{heading}</h2>

        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => {
              const { key, ...rest } = headerGroup.getHeaderGroupProps();
              return (
                <tr key={key} {...rest}>
                  {headerGroup.headers.map((column) => {
                    const { key, ...rest } = column.getHeaderProps();
                    return (
                      <th key={key} {...rest}>
                        {column.render("Header")}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);

              const { key, ...rest } = row.getRowProps();
              return (
                <tr key={key} {...rest}>
                  {row.cells.map((cell) => {
                    const { key, ...rest } = cell.getCellProps();
                    return (
                      <td key={key} {...rest}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
}

export default TableHOC;
