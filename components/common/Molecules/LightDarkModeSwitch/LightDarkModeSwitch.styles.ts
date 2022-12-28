import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.flexCenter};
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 2.5rem;
  height: 1.2rem;
  margin: 0 0.3rem;
`;

export const Checkbox = styled.input`
  // attribute selector
  &[type='checkbox'] {
    display: none;
  }

  // Adjacent sibling selector.
  &[type='checkbox']:checked + .switch::before {
    transform: translateX(1.32rem);
    background-color: #0190de;
  }
`;

export const Switch = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: ${({ theme }) => theme.title};
  border-radius: 2rem;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;

  &::before {
    position: absolute;
    content: '';
    left: 0.1rem;
    top: 0.1rem;
    width: 1rem;
    height: 1rem;
    background-color: #f6b91d;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
`;
