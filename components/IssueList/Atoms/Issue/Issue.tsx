import React from 'react';
import { dateConverter } from 'utils/dateConverter';
import * as S from './Issue.styles';
import type { IssueComponentType } from './type';

const Issue = ({ title, number, updated_at, comments }: IssueComponentType) => {
  return (
    <S.Container>
      <S.Info>
        <S.MainInfo>
          # {number} / {title}
        </S.MainInfo>
        <S.SubInfo>{dateConverter(updated_at)}</S.SubInfo>
      </S.Info>
      <S.Comments>{comments}</S.Comments>
    </S.Container>
  );
};

export default Issue;
