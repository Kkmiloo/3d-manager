import { IsString } from 'class-validator';

export class CreateMaterialDto {
  @IsString()
  name: string;
  @IsString()
  type: string;
}
