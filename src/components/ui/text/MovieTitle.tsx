import * as S from './MovieTitle.styles';

interface TitleProps {
  movieNm: string;
  titleEng: string;
  openYear: string;
  audiAcc: string;
  rank: number;
}

export default function MovieTitle({ movieNm, titleEng, openYear, audiAcc, rank }: TitleProps) {
  function formatAudience(audiAcc: number) {
    if (audiAcc >= 10000) {
      const tenThousand = Math.floor(audiAcc / 10000);
      const formattedTenThousand = new Intl.NumberFormat('ko-KR').format(tenThousand); // 쉼표 추가
      return `${formattedTenThousand}만 명`;
    } else {
      const formattedNumber = new Intl.NumberFormat('ko-KR').format(audiAcc);
      return `${formattedNumber} 명`;
    }
  }
  return (
    <>
      <S.Wrapper>
        <S.MainTitleText>{movieNm}</S.MainTitleText>
        <S.SubText>
          영화 · {titleEng} · {openYear.split('-')[0]}
        </S.SubText>
        <S.StyledText>
          {rank}위 · {formatAudience(Number(audiAcc))}
        </S.StyledText>
      </S.Wrapper>
    </>
  );
}
