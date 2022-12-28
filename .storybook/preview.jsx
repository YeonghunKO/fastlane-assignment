import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import Theme, { DarkTheme } from '../components/particles/Theme';
import GlobalStyles from '../components/particles/GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { RouterContext } from 'next/dist/shared/lib/router-context';

import { isDarkModeState } from 'store/isDarkModeAtoms';

import { useAtomValue } from 'jotai';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

const withThemeProvider = Story => {
  const [queryClient] = useState(() => new QueryClient());
  const isDarkMode = useAtomValue(isDarkModeState);

  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : Theme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <Story />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
