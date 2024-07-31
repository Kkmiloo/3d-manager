import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProductService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  async create(createProductDto: CreateProductDto) {
    const product = await this.product.create({ data: createProductDto });
    return product;
  }

  async findAll() {
    const products = await this.product.findMany();

    return products;
  }

  async findOne(id: number) {
    const product = await this.product.findUnique({
      where: {
        id: id,
      },
    });

    if (!product)
      throw new NotFoundException(`Product  with id: ${id} not found`);

    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    console.log({ id, updateProductDto });

    const updatedProduct = this.product.update({
      where: {
        id: id,
      },
      data: updateProductDto,
    });

    return updatedProduct;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
