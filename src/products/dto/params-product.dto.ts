import { IsMongoId } from "class-validator";

export class ParamsProducts {
  @IsMongoId()
  id: string;
}
