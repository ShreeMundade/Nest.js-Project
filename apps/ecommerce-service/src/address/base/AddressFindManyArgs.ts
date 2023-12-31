import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AddressWhereInput } from "./AddressWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AddressOrderByInput } from "./AddressOrderByInput";

@ArgsType()
class AddressFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AddressWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AddressWhereInput, { nullable: true })
  @Type(() => AddressWhereInput)
  where?: AddressWhereInput;

  @ApiProperty({
    required: false,
    type: [AddressOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AddressOrderByInput], { nullable: true })
  @Type(() => AddressOrderByInput)
  orderBy?: Array<AddressOrderByInput>;

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

export { AddressFindManyArgs as AddressFindManyArgs };
