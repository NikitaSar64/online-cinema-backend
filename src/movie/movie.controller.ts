import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  async create(@Body() movie: CreateMovieDto) {
    return this.movieService.create(movie);
  }

  @Post('genre')
  async addGenry(@Body() movieGenre: { filmId: number; genreId: number }) {
    return this.movieService.addFilmGenry(movieGenre);
  }

  @Get('slug/:slug')
  async searchMoviesBySlug(@Param('slug') slug: string) {
    return this.movieService.getMovieByName(slug);
  }

  @Put('id/:id')
  async updateMovieRating(
    @Param('id') id: number,
    @Body() rating: { rating: number },
  ) {
    return this.movieService.updateMovieRating(id, rating.rating);
  }

  @Get('id/:id')
  async getMovieById(@Param('id') id: number) {
    return this.movieService.getMovie(id);
  }

  @Get('most-popular')
  async getMostPopularMovie() {
    return this.movieService.getMostPopularMovie();
  }
}
