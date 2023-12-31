
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerWhereInput } from "./CustomerWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CustomerOrderByInput } from "./CustomerOrderByInput";

@ArgsType()
class CustomerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CustomerWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CustomerWhereInput, { nullable: true })
  @Type(() => CustomerWhereInput)
  where?: CustomerWhereInput;

  @ApiProperty({
    required: false,
    type: [CustomerOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CustomerOrderByInput], { nullable: true })
  @Type(() => CustomerOrderByInput)
  orderBy?: Array<CustomerOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CustomerFindManyArgs as CustomerFindManyArgs };
