import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    padding: 20px;
    @media screen and (max-width: 480px) {
      font-size: 11px;
      color: black;
      margin-top: 12em;
    }
`;

export const MainTitleText = styled.span`
  font-size: 2em;
  font-weight: bold;
`;

export const SubText = styled.span`
    font-size: 1em;
`;

export const StyledText = styled.span`
  font-size: 1em;
  font-weight: 700;
  color: gray;
  margin-top: 5px;
`