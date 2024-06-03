import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderItemWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  orders?: OrderWhereUniqueInput;
};
