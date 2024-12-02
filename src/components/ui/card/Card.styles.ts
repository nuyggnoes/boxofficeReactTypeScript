import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
`;

export const GridWrapper = styled.div`
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

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  height: 440px;
  width: 307px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05); /* 마우스 오버 시 확대 */
  }
  &:hover .movie-title {
    opacity: 1; /* 마우스 오버 시 영화 제목 표시 */
  }
  &:hover .movie-rank {
    opacity: 1; /* 마우스 오버 시 영화 순위 표시 */
  }
`;

export const MovieImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MovieTitle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  opacity: 0; /* 기본 상태에서 보이지 않음 */
  transition: opacity 0.3s ease-in-out;
  font-size: 18px;
  font-weight: bold;
`;

export const MovieRank = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  font-size: 100px;
  font-weight: 700;
  padding: 10px;
  font-family: 'Luckiest Guy', sans-serif;
  -webkit-text-stroke: 1px white; /* 흰색 테두리 */
`;
