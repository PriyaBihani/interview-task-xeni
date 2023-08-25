export interface Movie {
  id: number;
  posterUrl: string;
  releaseYear: string;
  title: string;
}

export interface MoviesState {
  movies?: Movie[];
}
