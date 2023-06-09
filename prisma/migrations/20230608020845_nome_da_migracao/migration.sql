/*
  Warnings:

  - You are about to drop the `Rota` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Rota";

-- CreateTable
CREATE TABLE "rottas" (
    "id" SERIAL NOT NULL,
    "status" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "rottas_pkey" PRIMARY KEY ("id")
);
