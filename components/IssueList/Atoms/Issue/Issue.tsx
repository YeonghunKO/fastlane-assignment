import Icon from '@components/common/Atoms/Icons/Icon';
import React from 'react';
import { dateConverter } from 'utils/dateConverter';
import * as S from './Issue.styles';
import type { IssueComponentType } from './type';

const Issue = ({
  title,
  number,
  updated_at,
  comments,
  html_url,
}: IssueComponentType) => {
  return (
    <S.Container href={html_url} target="_blank">
      <S.Info>
        <S.MainInfo>
          # {number} / {title}
        </S.MainInfo>
        <S.SubInfo>{dateConverter(updated_at)}</S.SubInfo>
      </S.Info>
      <S.Comments>
        <Icon icon="Comment" />
        <div>{comments}</div>
      </S.Comments>
    </S.Container>
  );
};

export default Issue;
