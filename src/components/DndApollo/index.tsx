'use client';

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { FC, PropsWithChildren } from 'react';

import { DND_GRAPHQL_API } from './dndApi';

const dndApolloClient = new ApolloClient({
  uri: DND_GRAPHQL_API,
  cache: new InMemoryCache()
});

export const DndApolloProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ApolloProvider client={dndApolloClient}>
      {children}
    </ApolloProvider>
  );
}

export default dndApolloClient;