import styled from 'styled-components';

export const Button = styled.button<{
  padding?: string;
  width?: string;
  backgroundColor?: string;
  textColor?: string;
}>`
  background-color: ${({ disabled, theme, backgroundColor }) => {
    if (disabled) {
      return theme.grey;
    }
    return backgroundColor;
  }};
  color: ${({ textColor, theme }) => textColor || theme.offWhite};
  width: ${({ width = '100%' }: { width?: string }) => width && width};
  padding: ${({ padding = '1rem' }) => padding && padding};
  transition: 0.1s all ease-in;
  font-weight: bold;
  &:hover {
    opacity: 0.8;
  }
`;
