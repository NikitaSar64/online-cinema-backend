import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';

@Controller('genres')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get()
  async getAllGenres() {
    return this.genreService.getAllGenres();
  }

  @Get('by-id/:id')
  async getProfile(@Param('id') id: number) {
    return this.genreService.getGenryById(id);
  }

  @Post()
  async create(@Body() genre: CreateGenreDto) {
    return this.genreService.create(genre);
  }
}
