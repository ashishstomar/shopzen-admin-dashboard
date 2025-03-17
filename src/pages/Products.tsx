import { ReactElement, useCallback, useState } from "react";
import Sidebar from "../components/Sidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";

import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img1 =
  "https://inventstore.in/wp-content/uploads/2024/03/MacBook_Air_13_in_M3_Midnight_PDP_Image_Position_1__en-IN-scaled.webp";
const img2 = "https://m.media-amazon.com/images/I/61uA2UVnYWL.jpg";
const img3 =
  "https://images-cdn.ubuy.co.in/66bee7bd7e1afa063e0f9a8e-meta-quest-3-128gb-bahnbrechende.jpg";
const img4 =
  "https://5.imimg.com/data5/SELLER/Default/2022/5/UI/CQ/WT/145965620/nintendo-switch-lite-blue-console-500x500.jpeg";

const arr: DataType[] = [
  {
    photo: <img src={img1} alt="macbook" />,
    name: "Macbook Air",
    price: 899,
    stock: 44,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="macbook" />,
    name: "iPad 10th Gen",
    price: 699,
    stock: 96,
    action: <Link to="/admin/product/sdfsdfgdfgsdg">Manage</Link>,
  },
  {
    photo: <img src={img3} alt="macbook" />,
    name: "Meta Quest 3",
    price: 399,
    stock: 134,
    action: <Link to="/admin/product/ehu5watqwr">Manage</Link>,
  },
  {
    photo: <img src={img4} alt="macbook" />,
    name: "Nintendo Switch",
    price: 299,
    stock: 64,
    action: <Link to="/admin/product/ehraegrhtsr">Manage</Link>,
  },
  {
    photo: <img src={img1} alt="macbook" />,
    name: "Macbook Air",
    price: 899,
    stock: 44,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="macbook" />,
    name: "iPad 10th Gen",
    price: 699,
    stock: 96,
    action: <Link to="/admin/product/sdfsdfgdfgsdg">Manage</Link>,
  },
  {
    photo: <img src={img3} alt="macbook" />,
    name: "Meta Quest 3",
    price: 399,
    stock: 134,
    action: <Link to="/admin/product/ehu5watqwr">Manage</Link>,
  },
  {
    photo: <img src={img4} alt="macbook" />,
    name: "Nintendo Switch",
    price: 299,
    stock: 64,
    action: <Link to="/admin/product/ehraegrhtsr">Manage</Link>,
  },
  {
    photo: <img src={img1} alt="macbook" />,
    name: "Macbook Air",
    price: 899,
    stock: 44,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="macbook" />,
    name: "iPad 10th Gen",
    price: 699,
    stock: 96,
    action: <Link to="/admin/product/sdfsdfgdfgsdg">Manage</Link>,
  },
  {
    photo: <img src={img3} alt="macbook" />,
    name: "Meta Quest 3",
    price: 399,
    stock: 134,
    action: <Link to="/admin/product/ehu5watqwr">Manage</Link>,
  },
  {
    photo: <img src={img4} alt="macbook" />,
    name: "Nintendo Switch",
    price: 299,
    stock: 64,
    action: <Link to="/admin/product/ehraegrhtsr">Manage</Link>,
  },
];

const Products = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Products",
      true
    ),
    []
  );

  return (
    <div className="admin-wrapper">
      <Sidebar />
      <main>{Table()}</main>
      <Link to="/admin/product/add" className="add-product-btn">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
