import { Module } from '@nestjs/common';
import { QuoterService } from './quoter.service';
import { QuoterController } from './quoter.controller';

@Module({
  controllers: [QuoterController],
  providers: [QuoterService],
})
export class QuoterModule {}
