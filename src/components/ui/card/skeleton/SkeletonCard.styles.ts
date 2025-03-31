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
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px; 
  padding: 16px;
  margin: 0 auto;

  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1023px) and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr); 
  }
`;
