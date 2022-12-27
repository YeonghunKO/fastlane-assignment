import { css, DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
  /* layout */
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,

  /* Colours */
  white: '#ffffff',
  offWhite: '#F0F0F0',

  grey: '#a6acb0',
  grey100: '#f0f1f2',

  primary: '#eee',
  primary300: '#f4f4f4',
  primary500: '#e6e6e6',
  primary700: '#c7c7c7',
  primary900: '#a8a8a8',

  secondary: '#54d75f',

  tertiary: '#de4536',
};

export default Theme;
