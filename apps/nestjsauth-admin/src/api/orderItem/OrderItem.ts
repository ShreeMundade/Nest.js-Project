import { Order } from "../order/Order";

export type OrderItem = {
  createdAt: Date;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
