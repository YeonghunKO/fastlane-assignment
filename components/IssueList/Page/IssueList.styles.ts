import styled from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => theme.flexColumn};
  background-color: ${({ theme }) => theme.backgroundColor};
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const LoaderContainer = styled.footer`
  ${({ theme }) => theme.flexCenter};
  width: 100%;
  height: 3rem;
`;
