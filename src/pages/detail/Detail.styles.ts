import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
`;

export const GridWrapper = styled.div`
  display: grid;
  width: max-content;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 16px;
  margin: 0 auto;

  @media screen and (max-width: 1030px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
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
    transform: scale(1.05);
  }
  &:hover .movie-title {
    opacity: 1; 
  }
  &:hover .movie-rank {
    opacity: 1; 
  }
`;

export const MainTitleText = styled.span`
  font-size: 30px;
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
  -webkit-text-stroke: 1px white; 
`;
