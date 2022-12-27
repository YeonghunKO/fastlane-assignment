import styled from 'styled-components';

export const ViewPortContainer = styled.div`
  position: fixed;
  ${({ theme }) => theme.flexCenter}
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.grey100};
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 50%;
  height: 40%;
  margin-bottom: 50px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 2px 2px 6px rgb(173, 173, 173);
`;

export const Container = styled.div`
  ${({ theme }) => theme.flexCenter};
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  gap: 20px;
  word-spacing: 6px;
  font-size: 18px;
  font-weight: 700;
  padding: 1rem;
`;

export const Text = styled.div`
  margin-top: 1rem;
`;
