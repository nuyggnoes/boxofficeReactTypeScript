export type Movie = {
  movieId: string;
  rank: number;
  movieNm: string;
  openDt: string;
  image: string;
  actorNm: string[];
  directorNm: string;
  plot: string;
  rating: string;
  runtime: string;
  stills: string[];
};

export type Actor = {
  actorNm: string;
};
