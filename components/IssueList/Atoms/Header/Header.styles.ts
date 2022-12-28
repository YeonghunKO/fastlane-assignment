import { DEVICE } from 'constant/mediaQueries';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: ${({ theme }) => theme.boxBackground};
  color: ${({ theme }) => theme.title};

  font-family: 'Barlow Condensed', sans-serif;

  width: 60%;
  height: 5rem;

  padding: 1rem;

  font-weight: bold;
  font-size: 1.5rem;

  margin-bottom: 1rem;

  @media ${DEVICE.sm} {
    width: 90%;
    font-size: 1rem;
  }
`;
