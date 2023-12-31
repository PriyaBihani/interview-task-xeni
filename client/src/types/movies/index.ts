export interface Movie {
  id: number;
  posterUrl: string;
  releaseDate: string;
  title: string;
}

export interface MoviesState {
  movies: Movie[] | [];
  allDataLoaded: boolean;
}

export interface MovieDetails {
  adult: boolean;
  backdropPath: string;
  belongsToCollection: {
    id: number;
    name: string;
    posterPath: string;
    backdropPath: string;
  };
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdbId: string;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  productionCompanies: {
    id: number;
    logoPath: string;
    name: string;
    originCountry: string;
  }[];
  productionCountries: {
    iso31661: string;
    name: string;
  }[];
  releaseDate: string;
  revenue: number;
  runtime: number;
  spokenLanguages: {
    englishName: string;
    iso6391: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}
