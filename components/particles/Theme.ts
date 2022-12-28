import { css, DarkModeTheme, DefaultTheme } from 'styled-components';

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

  /* light mode */
  backgroundColor: '#ffffff',
  boxBackground: '#f4f4f4',
  title: '#21262d',
  subtitle: '#6e737b',
  boxHoverColor: '#e6e6e6',
};

export const DarkTheme: DarkModeTheme = {
  ...Theme,

  /* dark mode */
  backgroundColor: '#21262d',
  boxBackground: '#434953',
  title: '#f4f4f4',
  subtitle: '#bcbcbd',
  boxHoverColor: '#727272',
};

export default Theme;
