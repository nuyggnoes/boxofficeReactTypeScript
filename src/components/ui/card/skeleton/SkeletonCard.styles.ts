import styled from '@emotion/styled';

export const SkeletonCard = styled.div`
  height: 440px;
  width: 307px;
  background-color: #585958;
  border-radius: 8px;
`;

export const SkeletonCardWrapper = styled.div`
  display: grid;
  width: max-content;
  grid-template-columns: repeat(3, 1fr); /* 한 줄에 5개 */
  gap: 20px; /* 카드 사이의 간격 */
  padding: 16px;
  margin: 0 auto;

  @media screen and (max-width: 1030px) {
    grid-template-columns: repeat(2, 1fr); /* 한 줄에 5개 */
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr); /* 한 줄에 5개 */
  }
`;
