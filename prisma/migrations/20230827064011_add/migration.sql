-- CreateTable
CREATE TABLE "Movies" (
    "id" SERIAL NOT NULL,
    "poster" TEXT NOT NULL,
    "bigPoster" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "duration" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FilmGenre" (
    "id" SERIAL NOT NULL,
    "filmId" INTEGER NOT NULL,
    "genreId" INTEGER NOT NULL,

    CONSTRAINT "FilmGenre_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Movies_slug_key" ON "Movies"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Movies_name_key" ON "Movies"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FilmGenre_filmId_genreId_key" ON "FilmGenre"("filmId", "genreId");

-- AddForeignKey
ALTER TABLE "FilmGenre" ADD CONSTRAINT "FilmGenre_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FilmGenre" ADD CONSTRAINT "FilmGenre_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
