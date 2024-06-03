import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderItemUpdateInput = {
  name?: string | null;
  orders?: OrderWhereUniqueInput | null;
};
