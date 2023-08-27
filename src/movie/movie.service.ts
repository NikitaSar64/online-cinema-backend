import { Injectable } from '@nestjs/common';
import { DataBaseService } from 'src/database/database.service';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MovieService {
  constructor(private readonly dataBaseServices: DataBaseService) {}

  async create(dto: CreateMovieDto) {
    await this.dataBaseServices.movies.create({
      data: dto,
    });
  }

  async addFilmGenry(dto: { filmId: number; genreId: number }) {
    await this.dataBaseServices.filmGenre.create({
      data: dto,
    });
  }

  async getMovieByName(slug: string) {
    const movies = await this.dataBaseServices.movies.findMany({
      where: { slug: { contains: slug.toLowerCase() } },
      include: {
        genres: {
          select: {
            genre: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    return movies;
  }
}
