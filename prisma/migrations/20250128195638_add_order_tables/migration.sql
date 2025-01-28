/*
 Warnings:
 
 - You are about to drop the `pallets` table. If the table is not empty, all the data it contains will be lost.
 
 */
-- CreateEnum
CREATE TYPE "PalletOrderStatus" AS ENUM ('OPEN', 'IN_PRODUCTION', 'DONE', 'CANCELED');

-- DropForeignKey
ALTER TABLE
    "production_records" DROP CONSTRAINT "production_records_pallet_id_fkey";

-- DropTable
DROP TABLE "pallets";

-- CreateTable
CREATE TABLE "pallets" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "version" INTEGER NOT NULL,
    "buy_cost" MONEY NOT NULL,
    "production_cost" MONEY NOT NULL,
    "sell_price" MONEY NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,
    CONSTRAINT "pallets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pallet_orders" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "status" "PalletOrderStatus" NOT NULL,
    "deadline" DATE NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "pallet_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pallet_order_items" (
    "id" TEXT NOT NULL,
    "pallet_order_id" TEXT NOT NULL,
    "pallet_id" TEXT NOT NULL,
    "quantity_requested" INTEGER NOT NULL,
    "quantity_produced " INTEGER NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "pallet_order_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "business_name" TEXT NOT NULL,
    "corporate_name" TEXT,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pallets_name_version_key" ON "pallets"("name", "version");

-- AddForeignKey
ALTER TABLE
    "production_records"
ADD
    CONSTRAINT "production_records_pallet_id_fkey" FOREIGN KEY ("pallet_id") REFERENCES "pallets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "pallet_orders"
ADD
    CONSTRAINT "pallet_orders_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "pallet_order_items"
ADD
    CONSTRAINT "pallet_order_items_pallet_id_fkey" FOREIGN KEY ("pallet_id") REFERENCES "pallets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "pallet_order_items"
ADD
    CONSTRAINT "pallet_order_items_pallet_order_id_fkey" FOREIGN KEY ("pallet_order_id") REFERENCES "pallet_orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;