import { useInView } from 'react-intersection-observer';
import React, { useEffect, useState } from 'react';

import Theme from '@components/particles/Theme';

import * as S from './IssueList.styles';
import useInfiniteQueryScroll from 'hooks/useInfiniteQueryScroll';
import Modal from '@components/common/Molecules/Modal';
import { HTTP_ERROR } from 'constant/httpError';
import Header from '../Atoms/Header';
import { BeatLoader } from 'react-spinners';
import IssuesContainer from '../Molecules/IssuesContainer';
import PageToTopButton from '@components/common/Atoms/PageToTopButton';

const IssueList = () => {
  const { ref, inView } = useInView();
  const { data, error, fetchNextPage, hasNextPage, status } =
    useInfiniteQueryScroll();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (status === 'error') {
    return <Modal message={HTTP_ERROR(error.message)} />;
  }

  return (
    <S.Container>
      <Header owner="facebook" repo="create-react-app" />
      <IssuesContainer data={data?.pages} />
      {hasNextPage && (
        <S.LoaderContainer ref={ref}>
          <BeatLoader size="1.5rem" color={Theme.tertiary} loading={true} />
        </S.LoaderContainer>
      )}
      <PageToTopButton />
    </S.Container>
  );
};

export default IssueList;
