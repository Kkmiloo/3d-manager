import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { MaterialModule } from './material/material.module';
import { QuoterModule } from './quoter/quoter.module';

@Module({
  imports: [ProductModule, MaterialModule, QuoterModule],
})
export class AppModule {}
