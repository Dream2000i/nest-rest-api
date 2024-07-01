import { Transform } from "class-transformer";
import { IsNumber, IsString, Length, Min } from "class-validator";

export class UpdateProductDto {
  @IsString()
  @Length(4, 20)
  readonly title: string;
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(100)
  readonly price: number;
}
