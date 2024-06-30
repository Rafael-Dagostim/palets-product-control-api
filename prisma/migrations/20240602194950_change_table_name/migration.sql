/*
  Warnings:

  - You are about to drop the `RecordHistory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `deleted_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RecordHistory" DROP CONSTRAINT "RecordHistory_record_id_fkey";

-- DropForeignKey
ALTER TABLE "RecordHistory" DROP CONSTRAINT "RecordHistory_user_id_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "deleted_at" TIMESTAMPTZ NOT NULL;

-- DropTable
DROP TABLE "RecordHistory";

-- CreateTable
CREATE TABLE "record_histories" (
    "id" TEXT NOT NULL,
    "record_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "status" "RecordStatus" NOT NULL,
    "observation" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "record_histories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "record_histories" ADD CONSTRAINT "record_histories_record_id_fkey" FOREIGN KEY ("record_id") REFERENCES "production_records"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "record_histories" ADD CONSTRAINT "record_histories_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
