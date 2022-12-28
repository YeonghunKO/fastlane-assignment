import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.boxBackground};
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 0.5rem;
  border-radius: 2rem;
  cursor: pointer;
`;
