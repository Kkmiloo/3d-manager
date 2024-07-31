import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuoterService } from './quoter.service';
import { CreateQuoterDto } from './dto/create-quoter.dto';
import { UpdateQuoterDto } from './dto/update-quoter.dto';

@Controller('quoter')
export class QuoterController {
  constructor(private readonly quoterService: QuoterService) {}

  @Post()
  create(@Body() createQuoterDto: CreateQuoterDto) {
    return this.quoterService.create(createQuoterDto);
  }

  @Get()
  findAll() {
    return this.quoterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quoterService.findOne(+id);
  }

  @Get('by-product/:id')
  findByProduct(@Param('id') id: string) {
    return this.quoterService.findByProduct(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuoterDto: UpdateQuoterDto) {
    return this.quoterService.update(+id, updateQuoterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quoterService.remove(+id);
  }
}
