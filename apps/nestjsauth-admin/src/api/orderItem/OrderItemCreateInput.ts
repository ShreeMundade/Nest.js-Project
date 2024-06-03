import { OrderCreateNestedManyWithoutOrderItemsInput } from "./OrderCreateNestedManyWithoutOrderItemsInput";

export type OrderItemCreateInput = {
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutOrderItemsInput;
};
