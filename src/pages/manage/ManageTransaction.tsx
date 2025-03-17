import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const img =
  "https://inventstore.in/wp-content/uploads/2024/03/MacBook_Air_13_in_M3_Midnight_PDP_Image_Position_1__en-IN-scaled.webp";
const orderItems = [
  {
    name: "Macbook Air",
    photo: img,
    _id: "wegraergawpghle",
    qty: 4,
    price: 2000,
  },
];

const ManageTransaction = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Ashish K",
    address: "324 XYZ Street",
    city: "Ambers",
    state: "Austrila",
    country: "India",
    pincode: 2378945,
    status: "Processing",
    subtotal: 69420,
    discount: 420,
    shippingCharge: 0,
    tax: 69,
    total: 69420 - 420 - 0 - 69,
    orderItems,
    _id: "awdwaf3e3tggew",
  });

  const {
    name,
    address,
    city,
    country,
    state,
    pincode,
    subtotal,
    shippingCharge,
    tax,
    discount,
    total,
    status,
  } = order;

  const handleUpdate = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };

  return (
    <div className="admin-wrapper">
      <Sidebar />
      <main className="product-management">
        <section>
          <h2>OrderItems</h2>
          {order.orderItems.map((i) => (
            <OrderItemCard
              name={i.name}
              photo={i.photo}
              _id={i._id}
              qty={i.qty}
              price={i.price}
            />
          ))}
        </section>
        <article className="shipping-info-card">
          <h1>Order Details</h1>
          <h5>User Details</h5>
          <p> Name: {name}</p>
          <p>
            Address: {`${address}, ${city}, ${state},${country} ${pincode}`}
          </p>
          <h5>Amount Info</h5>
          <p> Subtotal: {subtotal}</p>
          <p> Shipping Charges: {shippingCharge}</p>
          <p> Tax: {tax}</p>
          <p> Discount: {discount}</p>
          <p> Total: {total}</p>

          <h5>Status Info</h5>
          <p>
            Status:{" "}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>

          <button onClick={handleUpdate}>Process Order</button>
        </article>
      </main>
    </div>
  );
};

const OrderItemCard = ({ name, photo, price, qty, _id }: OrderItemType) => (
  <div className="transaction-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}> {name}</Link>
    <span>
      ${price} X {qty} = ${price * qty}
    </span>
  </div>
);

export default ManageTransaction;
