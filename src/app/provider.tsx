import { FC, PropsWithChildren } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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
