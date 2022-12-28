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

    boxBackground: '#f4f4f4' | string;
    title: '#21262d' | string;
    subtitle: '#6e737b' | string;
    boxHoverColor: '#e6e6e6' | string;
  }

  export interface DarkModeTheme extends DefaultTheme {
    backgroundColor: '#434953' | string;
    boxBackground: '#21262d' | string;
    title: '#f4f4f4' | string;
    subtitle: '#9c9fa5' | string;
    boxHoverColor: '#434953' | string;
  }
}
