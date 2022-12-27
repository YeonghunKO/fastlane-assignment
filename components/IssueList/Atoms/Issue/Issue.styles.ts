import styled from 'styled-components';

export const Container = styled.article`
  ${({ theme }) => theme.flexCenter};
  justify-content: space-between;

  border-radius: 1rem;

  padding: 1.5rem;

  width: 100%;
  height: 6rem;

  background-color: ${({ theme }) => theme.primary};

  font-weight: 100;
  font-size: 1.5rem;

  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    transition: all 0.3s ease;
    background-color: ${({ theme }) => theme.primary500};
  }

  margin-bottom: 1rem;
`;

export const Info = styled.div`
  ${({ theme }) => theme.flexColumn};
  width: 90%;
  gap: 1rem;
`;

export const MainInfo = styled.h1`
  font-weight: bold;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SubInfo = styled.span`
  font-size: 0.7em;
`;

export const Comments = styled.div`
  width: 5%;
  font-size: 0.7em;
`;
