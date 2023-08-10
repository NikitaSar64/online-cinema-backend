/*
  Warnings:

  - You are about to drop the `Genry` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Genry";

-- CreateTable
CREATE TABLE "Genres" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "Genres_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Genres_slug_key" ON "Genres"("slug");
