import { PartialType } from '@nestjs/mapped-types';
import { CreateQuoterDto } from './create-quoter.dto';

export class UpdateQuoterDto extends PartialType(CreateQuoterDto) {}
