import styled from '@emotion/styled';

interface MovieSummaryProps {
  genre: string;
  nation: string;
  runtime: string;
  movieOpenDt: string;
  directorNm: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 4px solid #d9d9dc;
  padding: 0 10px;
`;

const TextLineWrapper = styled.div`
  margin-bottom: 10px;
`;

const TextWrapper = styled.span`
  color: gray;
  padding: 0 12px 0 0;
`;

export default function MovieSummary({
  genre,
  nation,
  runtime,
  movieOpenDt,
  directorNm,
}: MovieSummaryProps) {
  return (
    <>
      <Wrapper>
        <TextLineWrapper>
          <TextWrapper>개요</TextWrapper> {genre} · {nation} · {runtime}분
        </TextLineWrapper>
        <TextLineWrapper>
          <TextWrapper>개봉</TextWrapper> {movieOpenDt}.
        </TextLineWrapper>
        <div>
          <TextWrapper>감독</TextWrapper> {directorNm}
        </div>
      </Wrapper>
    </>
  );
}
