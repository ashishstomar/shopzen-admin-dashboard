import { ReactElement, useCallback, useState } from "react";
import Sidebar from "../components/Sidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  qty: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "QTY",
    accessor: "qty",
  },
  {
    Header: "status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    user: "Pehal Sharma",
    amount: 8000,
    discount: 580,
    qty: 2,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/product/sdfsdfgdfgsdg">Manage</Link>,
  },
  {
    user: "Gaurav Katare",
    amount: 6400,
    discount: 1580,
    qty: 7,
    status: <span className="green">Delivered</span>,
    action: <Link to="/admin/product/sdfsdfgdfgsdg">Manage</Link>,
  },
  {
    user: "Yogi Pandu",
    amount: 3220,
    discount: 420,
    qty: 4,
    status: <span className="purple">Shipped</span>,
    action: <Link to="/admin/product/sdfsdfgdfgsdg">Manage</Link>,
  },
];

const Transaction = () => {
  const [data, setData] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Transactions",
      true
    ),
    []
  );
  return (
    <div className="admin-wrapper">
      <Sidebar />
      <main>
        <Table />
      </main>
    </div>
  );
};

export default Transaction;
