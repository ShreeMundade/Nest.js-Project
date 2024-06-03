import { OrderItem as TOrderItem } from "../api/orderItem/OrderItem";

export const ORDERITEM_TITLE_FIELD = "name";

export const OrderItemTitle = (record: TOrderItem): string => {
  return record.name?.toString() || String(record.id);
};
