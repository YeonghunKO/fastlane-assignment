import React from 'react';
import Icon from '../Icons/Icon';
import * as S from './PageToTopButton.styles';

const PageToTopButton = () => {
  const GoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <S.Container onClick={GoToTop}>
      <Icon icon="ArrowUp" />
    </S.Container>
  );
};

export default PageToTopButton;
