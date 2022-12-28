import type { AppProps } from 'next/app';

import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import Theme, { DarkTheme } from '@components/particles/Theme';
import GlobalStyle from '@components/particles/GlobalStyles';

import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from '@tanstack/react-query';

import LightDarkModeSwitch from '@components/common/Molecules/LightDarkModeSwitch';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useAtomValue } from 'jotai';
import { isDarkModeState } from 'store/isDarkModeAtoms';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const isDarkMode = useAtomValue(isDarkModeState);

  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : Theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ReactQueryDevtools initialIsOpen={true} />
          <>
            <LightDarkModeSwitch />
            <Component {...pageProps} />
          </>
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
