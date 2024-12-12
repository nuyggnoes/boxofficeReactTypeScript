import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 340px;
`;

export const Title = styled.div`
  color: white;
  font-size: 100px;
  font-family: 'Monoton', sans-serif;

  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    font-size: 80px;
  }

  @media screen and (max-width: 1023px) and (min-width: 768px) {
    font-size: 60px;
  }
  @media screen and (max-width: 767px) {
    font-size: 30px;
  }
`;
