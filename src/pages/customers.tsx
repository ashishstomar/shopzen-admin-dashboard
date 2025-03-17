import { ReactElement, useCallback, useState } from "react";
import Sidebar from "../components/Sidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: ReactElement;
  name: string;
  mail: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Mail",
    accessor: "mail",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img1 = "https://www.svgrepo.com/show/429229/avatar-female-headset-2.svg";
const img2 = "https://www.svgrepo.com/show/429224/avatar-fashion-female-3.svg";
const img3 = "https://www.svgrepo.com/show/429236/avatar-cap-fashion.svg";
const img4 = "https://www.svgrepo.com/show/429228/avatar-female-person.svg";

const arr: DataType[] = [
  {
    avatar: <img style={{ borderRadius: "50%" }} src={img1} alt="user" />,
    name: "Pehal Sharma",
    mail: "pehalsharma@examplemail.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: <img style={{ borderRadius: "50%" }} src={img2} alt="user" />,
    name: "Neeti Kapur",
    mail: "neetikapur@examplemail.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: <img style={{ borderRadius: "50%" }} src={img3} alt="user" />,
    name: "Gaurav Katare",
    mail: "kataregaurav@examplemail.com",
    gender: "male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: <img style={{ borderRadius: "50%" }} src={img4} alt="user" />,
    name: "Yogi Pandu",
    mail: "yogipandu@examplemail.com",
    gender: "male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const Customers = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Customers",
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

export default Customers;
