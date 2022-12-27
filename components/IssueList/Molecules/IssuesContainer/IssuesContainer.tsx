import Issue from '@components/IssueList/Atoms/Issue';
import React from 'react';
import * as S from './IssuesContainer.styles';
import type { IssuesContainerType } from './type';

const IssuesContainer = ({ data }: IssuesContainerType) => {
  return (
    <S.Container>
      {data?.map(page => (
        <section key={page?.nextId}>
          {page?.issues?.map(({ number, updated_at, comments, title, id }) => (
            <Issue
              number={number}
              updated_at={updated_at}
              comments={comments}
              title={title}
              key={id}
            />
          ))}
        </section>
      ))}
    </S.Container>
  );
};

export default IssuesContainer;
