import React from 'react';
import * as S from './Header.styles';
import type { HeaderType } from './type';

const Header = ({ owner, repo }: HeaderType) => {
  return (
    <S.Container>
      {owner} / {repo}
    </S.Container>
  );
};

export default Header;
