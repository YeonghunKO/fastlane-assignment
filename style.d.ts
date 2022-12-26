import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    flexCenter: ThemedCssFunction;
    flexColumn: ThemedCssFunction;

    white: '#ffffff';
    offWhite: '#F0F0F0';

    primary: '#eee';
  }
}
