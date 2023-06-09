-- CreateTable
CREATE TABLE "Rota" (
    "id" SERIAL NOT NULL,
    "status" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Rota_pkey" PRIMARY KEY ("id")
);
