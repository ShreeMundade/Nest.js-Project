import { OrderUpdateManyWithoutOrderItemsInput } from "./OrderUpdateManyWithoutOrderItemsInput";

export type OrderItemUpdateInput = {
  name?: string | null;
  orders?: OrderUpdateManyWithoutOrderItemsInput;
};
