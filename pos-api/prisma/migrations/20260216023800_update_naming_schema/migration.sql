/*
  Warnings:

  - You are about to drop the column `expiiryDate` on the `transactions` table. All the data in the column will be lost.
  - Added the required column `expiry` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "expiiryDate",
ADD COLUMN     "expiry" TIMESTAMP(3) NOT NULL;
