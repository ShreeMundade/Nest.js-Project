/*
  Warnings:

  - You are about to drop the column `ordersId` on the `OrderItem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_ordersId_fkey";

-- DropIndex
DROP INDEX "OrderItem_ordersId_key";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "orderItemId" TEXT;

-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "ordersId";

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "OrderItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
