/*
 Warnings:
 
 - The values [DONE] on the enum `RecordStatus` will be removed. If these variants are still used in the database, this will fail.
 - You are about to drop the column `manager_id` on the `RecordHistory` table. All the data in the column will be lost.
 - A unique constraint covering the columns `[name,version]` on the table `pallets` will be added. If there are existing duplicate values, this will fail.
 - Added the required column `record_id` to the `RecordHistory` table without a default value. This is not possible if the table is not empty.
 - Added the required column `user_id` to the `RecordHistory` table without a default value. This is not possible if the table is not empty.
 - Added the required column `version` to the `pallets` table without a default value. This is not possible if the table is not empty.
 
 */
-- AlterEnum
BEGIN;

CREATE TYPE "RecordStatus_new" AS ENUM ('OPEN', 'REFORMED', 'CANCELED', 'PAYED');

ALTER TABLE
  "production_records"
ALTER COLUMN
  "status" TYPE "RecordStatus_new" USING ("status" :: text :: "RecordStatus_new");

ALTER TABLE
  "RecordHistory"
ALTER COLUMN
  "status" TYPE "RecordStatus_new" USING ("status" :: text :: "RecordStatus_new");

ALTER TYPE "RecordStatus" RENAME TO "RecordStatus_old";

ALTER TYPE "RecordStatus_new" RENAME TO "RecordStatus";

DROP TYPE "RecordStatus_old";

COMMIT;

-- DropForeignKey
ALTER TABLE
  "RecordHistory" DROP CONSTRAINT "RecordHistory_manager_id_fkey";

-- DropIndex
DROP INDEX "pallets_name_key";

-- AlterTable
ALTER TABLE
  "RecordHistory" DROP COLUMN "manager_id",
ADD
  COLUMN "record_id" TEXT NOT NULL,
ADD
  COLUMN "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE
  "pallets"
ADD
  COLUMN "version" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "pallets_name_version_key" ON "pallets"("name", "version");

-- AddForeignKey
ALTER TABLE
  "RecordHistory"
ADD
  CONSTRAINT "RecordHistory_record_id_fkey" FOREIGN KEY ("record_id") REFERENCES "production_records"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
  "RecordHistory"
ADD
  CONSTRAINT "RecordHistory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;