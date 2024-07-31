import { IsNumber } from 'class-validator';

export class CreateQuoterDto {
  @IsNumber()
  scaleZ: number;
  @IsNumber()
  fillPercentage: number;
  @IsNumber()
  printConsume: number;
  @IsNumber()
  materialPrintCost: number;
  @IsNumber()
  energyCost: number;
  @IsNumber()
  printTime: number;
  @IsNumber()
  printEnergyCost: number;
  @IsNumber()
  costPerMachine: number;
  @IsNumber()
  overCost: number;
  @IsNumber()
  percentageOfProfit: number;
  @IsNumber()
  saleCost: number;
  @IsNumber()
  valueWithK: number;
  @IsNumber()
  netCost: number;

  @IsNumber()
  materialId: number;
  @IsNumber()
  productId: number;
}
