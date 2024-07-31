import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { CreateQuoterDto } from './dto/create-quoter.dto';
import { UpdateQuoterDto } from './dto/update-quoter.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class QuoterService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createQuoterDto: CreateQuoterDto) {
    const quoter = this.quoter.create({ data: createQuoterDto });
    if (!quoter) throw new NotFoundException('Quoter not found');
    return quoter;
  }

  findAll() {
    return this.quoter.findMany({});
  }

  findOne(id: number) {
    return `This action returns a #${id} quoter`;
  }

  findByProduct(id: number) {
    return this.quoter.findMany({
      where: {
        productId: id,
      },
    });
  }

  update(id: number, updateQuoterDto: UpdateQuoterDto) {
    return `This action updates a #${id} quoter`;
  }

  remove(id: number) {
    return `This action removes a #${id} quoter`;
  }
}
