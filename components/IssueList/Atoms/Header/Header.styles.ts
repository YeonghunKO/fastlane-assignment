import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: ${({ theme }) => theme.primary300};

  font-family: 'Barlow Condensed', sans-serif;

  width: 60%;
  height: 5rem;

  padding: 1rem;

  font-weight: bold;
  font-size: 1.5rem;

  margin-bottom: 1rem;
`;
