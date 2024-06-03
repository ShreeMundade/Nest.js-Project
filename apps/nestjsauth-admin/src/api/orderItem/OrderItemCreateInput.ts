import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderItemCreateInput = {
  name?: string | null;
  orders?: OrderWhereUniqueInput | null;
};
