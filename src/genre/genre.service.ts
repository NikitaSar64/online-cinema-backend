import { Injectable, NotFoundException } from '@nestjs/common';
import { DataBaseService } from '../database/database.service';
import { CreateGenreDto } from './dto/create-genre.dto';

@Injectable()
export class GenreService {
  constructor(private readonly dataBaseServices: DataBaseService) {}

  async getGenryById(id: number) {
    const genre = await this.dataBaseServices.genres.findUnique({
      where: {
        id,
      },
    });

    if (!genre) {
      throw new NotFoundException('Genre not found');
    }

    return genre;
  }

  async update(id: number, dto: CreateGenreDto) {
    await this.dataBaseServices.genres.update({
      where: {
        id,
      },
      data: dto,
    });
  }

  async delete(id: number) {
    await this.dataBaseServices.genres.delete({
      where: {
        id,
      },
    });
  }

  async create(dto: CreateGenreDto) {
    await this.dataBaseServices.genres.create({
      data: dto,
    });
  }

  async getAllGenres() {
    const genres = await this.dataBaseServices.genres.findMany();

    return genres;
  }
}
