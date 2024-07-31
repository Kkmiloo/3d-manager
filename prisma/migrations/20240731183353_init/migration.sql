-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quoter" (
    "id" SERIAL NOT NULL,
    "scaleZ" DOUBLE PRECISION NOT NULL,
    "fillPercentage" DOUBLE PRECISION NOT NULL,
    "printConsume" DOUBLE PRECISION NOT NULL,
    "materialPrintCost" DOUBLE PRECISION NOT NULL,
    "energyCost" DOUBLE PRECISION NOT NULL,
    "printTime" INTEGER NOT NULL,
    "printEnergyCost" DOUBLE PRECISION NOT NULL,
    "costPerMachine" DOUBLE PRECISION NOT NULL,
    "overCost" DOUBLE PRECISION NOT NULL,
    "percentageOfProfit" DOUBLE PRECISION NOT NULL,
    "saleCost" DOUBLE PRECISION NOT NULL,
    "valueWithK" DOUBLE PRECISION NOT NULL,
    "netCost" DOUBLE PRECISION NOT NULL,
    "productId" INTEGER NOT NULL,
    "materialId" INTEGER NOT NULL,

    CONSTRAINT "Quoter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Material" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Quoter" ADD CONSTRAINT "Quoter_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quoter" ADD CONSTRAINT "Quoter_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
