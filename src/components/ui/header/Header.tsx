import * as S from './Header.styles';
import { Global } from '@emotion/react';

export default function Header(): JSX.Element {
  return (
    <S.Wrapper>
      <Global styles={S.globalStyles} />
      <S.Title>Box Office Rank</S.Title>
    </S.Wrapper>
  );
}
