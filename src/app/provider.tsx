import { FC, PropsWithChildren } from "react";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { DndApolloProvider } from "../components/DndApollo";

const AppProvider: FC<Readonly<PropsWithChildren>> = ({
  children,
}) => {
  return (
    <AppRouterCacheProvider>
      <DndApolloProvider>
        <CssBaseline />
        {children}
      </DndApolloProvider>
    </AppRouterCacheProvider>
  );
}

export default AppProvider;
