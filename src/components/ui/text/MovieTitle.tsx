import * as S from './MovieTitle.styles';

interface ITitleProps {
  movieNm: string;
  titleEng: string;
  openYear: string;
}

export default function MovieTitle({ movieNm, titleEng, openYear }: ITitleProps) {
  return (
    <>
      <S.Wrapper>
        <S.MainTitleText>{movieNm}</S.MainTitleText>
        <S.SubText>
          영화 · {titleEng} · {openYear}
        </S.SubText>
      </S.Wrapper>
    </>
  );
}
