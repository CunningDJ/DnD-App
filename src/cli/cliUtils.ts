'use server';

import { DND_GRAPHQL_API } from '@/components/DndApollo/dndApi';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import crossFetch from 'cross-fetch';

// Reason for cross-fetch/special apollo client in the CLI environment: https://www.apollographql.com/docs/react/networking/advanced-http-networking/#providing-a-fetch-replacement-for-certain-environments
const link = new HttpLink({ uri: DND_GRAPHQL_API, fetch: crossFetch });
export const dndApolloClient = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});