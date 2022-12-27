import styled from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => theme.flexColumn};

  font-family: 'Barlow Condensed', sans-serif;

  width: 60%;
`;
