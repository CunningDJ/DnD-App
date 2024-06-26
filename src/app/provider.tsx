import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { FC, PropsWithChildren } from 'react';

import { DndApolloProvider } from '../components/DndApollo';

import theme from './theme';



const AppProvider: FC<Readonly<PropsWithChildren>> = ({
  children,
}) => {
  return (
    <AppRouterCacheProvider>
      <DndApolloProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </DndApolloProvider>
    </AppRouterCacheProvider>
  );
}

export default AppProvider;
