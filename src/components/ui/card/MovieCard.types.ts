export type Movie = {
  movieId: string;
  titleEng: string;
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
  audiAcc: string;
  genre: string;
  nation: string;
  keyword: string;
};

export type Actor = {
  actorNm: string;
};
