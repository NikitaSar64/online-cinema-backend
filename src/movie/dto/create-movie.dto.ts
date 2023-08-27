import {
	IsNumber,
	IsString,
} from 'class-validator';

export class CreateMovieDto {
	@IsString()
	name: string;
	
	@IsString()
	slug: string;

	@IsString()
	poster: string;

	@IsString()
	bigPoster: string;

	@IsNumber()
	year: number;

	@IsString()
	description: string;

	@IsString()
	duration: string;

	@IsString()
	country: string;
}
