/*
  Warnings:

  - Added the required column `date` to the `rottas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "rottas" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "description" TEXT;
