
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

@InputType()
class ProductWhereUniqueInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;
}

export { ProductWhereUniqueInput as ProductWhereUniqueInput };
