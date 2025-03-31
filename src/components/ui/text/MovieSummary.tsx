import styled from '@emotion/styled';
import MovieTitle from './MovieTitle';

interface MovieSummaryProps {
  movieNm: string;
  titleEng: string;
  openYear: string;
  audiAcc: string;
  rank: number;
  genre: string;
  nation: string;
  runtime: string;
  movieOpenDt: string;
  directorNm: string;
  rating: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 4px solid #d9d9dc;
  width: 55vw;
  padding: 10px;
`;

const TextLineWrapper = styled.div`
  margin: 5px;
  font-size: 1em;
`;

const TextWrapper = styled.span`
  color: gray;
  padding: 0 12px 0 0;
`;

const TitleWrapper = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: block;
  }
`;

export default function MovieSummary({
  movieNm,
  titleEng,
  openYear,
  audiAcc,
  rank,
  genre,
  nation,
  runtime,
  movieOpenDt,
  directorNm,
  rating,
}: MovieSummaryProps) {
  return (
    <>
      <TitleWrapper>
        <MovieTitle
          movieNm={movieNm}
          titleEng={titleEng}
          openYear={openYear}
          audiAcc={audiAcc}
          rank={rank}
        />
      </TitleWrapper>
      <Wrapper>
        <TextLineWrapper>
          <TextWrapper>개요</TextWrapper> {genre.replaceAll(',', ', ')} · {nation} · {runtime}분
        </TextLineWrapper>
        <TextLineWrapper>
          <TextWrapper>개봉</TextWrapper> {movieOpenDt.replaceAll('-', '.')}.
        </TextLineWrapper>
        <TextLineWrapper>
          <TextWrapper>감독</TextWrapper> {directorNm}
        </TextLineWrapper>
        <TextLineWrapper>
          <TextWrapper>등급</TextWrapper>
          {rating}
        </TextLineWrapper>
      </Wrapper>
    </>
  );
}
