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

  primary: '#eee',
};

export default Theme;
