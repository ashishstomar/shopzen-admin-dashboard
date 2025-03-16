export type OrderItemType = {
  name: string;
  photo: string;
  price: number;
  qty: number;
  _id: string;
};

export type OrderType = {
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: number;
  status: "Processing" | "Shipped" | "Delivered";
  subtotal: number;
  discount: number;
  shippingCharge: number;
  tax: number;
  total: number;
  orderItem: OrderItemType[];
  _id: string;
};
