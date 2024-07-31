import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class MaterialService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createMaterialDto: CreateMaterialDto) {
    const { name, type } = createMaterialDto;

    const material = this.material.create({
      data: {
        name,
        type,
      },
    });

    return material;
  }

  findAll() {
    const materials = this.material.findMany();

    return materials;
  }

  async findOne(id: number) {
    const material = await this.material.findUnique({
      where: {
        id,
      },
    });
    if (!material) throw new NotFoundException('Material not found');

    return material;
  }

  update(id: number, updateMaterialDto: UpdateMaterialDto) {
    const material = this.material.update({
      where: {
        id,
      },
      data: {
        ...updateMaterialDto,
      },
    });

    return material;
  }

  remove(id: number) {
    return `This action removes a #${id} material`;
  }
}
