import type { ButtonType } from './type';
import React from 'react';
import * as S from './Button.styles';

const Button = ({ children, onClick, ...props }: ButtonType) => {
  return (
    <S.Button onClick={onClick} {...props}>
      <span>{children}</span>
    </S.Button>
  );
};

export default Button;
