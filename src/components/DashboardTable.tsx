import { Column } from "react-table";
import TableHOC from "./TableHOC";

interface DataType {
  id: string;
  amount: number;
  qty: number;
  discount: number;
  status: string;
}

const columns: Column<DataType>[] = [
  {
    Header: "id",
    accessor: "id",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "QTY",
    accessor: "qty",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },

  {
    Header: "Status",
    accessor: "status",
  },
];

const DashboardTable = ({ data = [] }: { data: DataType[] }) => {
  return TableHOC<DataType>(
    columns,
    data,
    "transaction-box",
    "Top Transaction"
  )();
};

export default DashboardTable;
