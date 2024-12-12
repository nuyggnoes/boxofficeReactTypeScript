import styled from '@emotion/styled';

interface RankCardProps {
  rank: string;
  audiAcc: string;
}

const Wrapper = styled.div`
  background-color: #f7f6f4;
  padding: 22px;
  border-radius: 15px;
  width: max-content;
`;

const TitleText = styled.div`
  color: #785d46;
  font-weight: bold;
  margin-bottom: 6px;
`;

const ContentWrapper = styled.div`
  font-size: 1.5rem;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

export default function RankCard({ rank, audiAcc }: RankCardProps) {
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
    <Wrapper>
      <TitleText>순위 · 누적 관객수</TitleText>
      <ContentWrapper>
        <BoldText>{rank}</BoldText>위 / <BoldText>{formatAudience(Number(audiAcc))}</BoldText>
      </ContentWrapper>
    </Wrapper>
  );
}
