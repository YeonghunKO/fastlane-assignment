import Button from '@components/common/Atoms/Button';
import { useCallBackIfClickOutsideRef } from 'hooks/useCallBackIfClickOutsideRef';
import type { ModalType } from './type';
import type { RefObject } from 'react';

import * as S from './Modal.styles';
import Theme from '@components/particles/Theme';

const Modal = ({ message, onButton }: ModalType) => {
  const handleCloseModal = () => {
    onButton && onButton();
  };

  const { ref }: { ref: any & RefObject<HTMLElement> } =
    useCallBackIfClickOutsideRef(handleCloseModal);

  return (
    <S.ViewPortContainer>
      <S.ModalContainer ref={ref}>
        <S.Container>
          <S.Text>{message}</S.Text>
          <Button onClick={handleCloseModal} backgroundColor={Theme.tertiary}>
            확인
          </Button>
        </S.Container>
      </S.ModalContainer>
    </S.ViewPortContainer>
  );
};

export default Modal;
