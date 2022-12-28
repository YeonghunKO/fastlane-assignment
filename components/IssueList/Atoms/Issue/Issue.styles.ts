import { DEVICE } from 'constant/mediaQueries';
import styled from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => theme.flexCenter};
  justify-content: space-between;

  border-radius: 1rem;

  padding: 1rem;

  width: 100%;
  height: 6rem;

  background-color: ${({ theme }) => theme.boxBackground};

  font-weight: 100;
  font-size: 1.5rem;

  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    transition: all 0.3s ease;
    background-color: ${({ theme }) => theme.boxHoverColor};
  }

  margin-bottom: 1rem;

  @media ${DEVICE.sm} {
    height: 5rem;
  }
`;

export const Info = styled.div`
  ${({ theme }) => theme.flexColumn};
  width: 90%;
  height: 100%;
  gap: 0.5rem;

  @media ${DEVICE.sm} {
    width: 87%;
    font-size: 0.9rem;
    height: 85%;
  }
`;

export const MainInfo = styled.h1`
  font-weight: bold;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.title};
`;

export const SubInfo = styled.span`
  font-size: 0.7em;
  color: ${({ theme }) => theme.subtitle};
`;

export const Comments = styled.div`
  ${({ theme }) => theme.flexCenter};
  color: ${({ theme }) => theme.subtitle};
  width: 10%;
  font-size: 0.7em;

  @media ${DEVICE.sm} {
    width: 13%;
    font-size: 0.5em;
    height: 65%;
  }
`;

export const CommentNumber = styled.span`
  width: 50%;
`;
