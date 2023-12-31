
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateOrderArgs } from "./CreateOrderArgs";
import { UpdateOrderArgs } from "./UpdateOrderArgs";
import { DeleteOrderArgs } from "./DeleteOrderArgs";
import { OrderCountArgs } from "./OrderCountArgs";
import { OrderFindManyArgs } from "./OrderFindManyArgs";
import { OrderFindUniqueArgs } from "./OrderFindUniqueArgs";
import { Order } from "./Order";
import { Customer } from "../../customer/base/Customer";
import { Product } from "../../product/base/Product";
import { OrderService } from "../order.service";
@graphql.Resolver(() => Order)
export class OrderResolverBase {
  constructor(protected readonly service: OrderService) {}

  async _ordersMeta(
    @graphql.Args() args: OrderCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Order])
  async orders(@graphql.Args() args: OrderFindManyArgs): Promise<Order[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Order, { nullable: true })
  async order(
    @graphql.Args() args: OrderFindUniqueArgs
  ): Promise<Order | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Order)
  async createOrder(@graphql.Args() args: CreateOrderArgs): Promise<Order> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        customer: args.data.customer
          ? {
              connect: args.data.customer,
            }
          : undefined,

        product: args.data.product
          ? {
              connect: args.data.product,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Order)
  async updateOrder(
    @graphql.Args() args: UpdateOrderArgs
  ): Promise<Order | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          customer: args.data.customer
            ? {
                connect: args.data.customer,
              }
            : undefined,

          product: args.data.product
            ? {
                connect: args.data.product,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Order)
  async deleteOrder(
    @graphql.Args() args: DeleteOrderArgs
  ): Promise<Order | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Customer, {
    nullable: true,
    name: "customer",
  })
  async resolveFieldCustomer(
    @graphql.Parent() parent: Order
  ): Promise<Customer | null> {
    const result = await this.service.getCustomer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Product, {
    nullable: true,
    name: "product",
  })
  async resolveFieldProduct(
    @graphql.Parent() parent: Order
  ): Promise<Product | null> {
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
