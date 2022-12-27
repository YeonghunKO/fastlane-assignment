import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    flexCenter: ThemedCssFunction;
    flexColumn: ThemedCssFunction;

    white: '#ffffff';
    offWhite: '#F0F0F0';

    grey: '#a6acb0';
    grey100: '#f0f1f2';

    primary: '#eee';
    primary300: '#f4f4f4';
    primary500: '#e6e6e6';
    primary700: '#c7c7c7';
    primary900: '#a8a8a8';

    tertiary: '#de4536';

    secondary: '#54d75f';
  }
}
