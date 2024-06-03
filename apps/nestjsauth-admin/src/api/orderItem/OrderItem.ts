import { Order } from "../order/Order";

export type OrderItem = {
  createdAt: Date;
  id: string;
  name: string | null;
  orders?: Order | null;
  updatedAt: Date;
};
