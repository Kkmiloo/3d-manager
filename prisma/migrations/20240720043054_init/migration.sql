-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "scaleZ" DECIMAL(65,30) NOT NULL,
    "fillPercentage" DECIMAL(65,30) NOT NULL,
    "materialId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Material" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductsOnOrders" (
    "productId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductsOnOrders_pkey" PRIMARY KEY ("productId","orderId")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsOnOrders" ADD CONSTRAINT "ProductsOnOrders_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsOnOrders" ADD CONSTRAINT "ProductsOnOrders_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
