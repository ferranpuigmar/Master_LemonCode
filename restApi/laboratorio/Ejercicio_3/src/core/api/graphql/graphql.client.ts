import { GraphQLClient, Variables } from 'graphql-request';
import { toApiError } from './graphql.error';

const TIMEOUT_MS = 5000;

const endpoint = new URL(
  import.meta.env.VITE_API_GRAPHQL_URL,
  window.location.origin
).toString();

export const graphqlClient = new GraphQLClient(endpoint);

export const graphqlRequest = async <TResult>(
  document: string,
  variables?: Variables
): Promise<TResult> => {
  try {
    return await graphqlClient.request<TResult>({ 
      document, 
      variables, 
      signal: AbortSignal.timeout(TIMEOUT_MS) 
    });
  } catch (error) {
    throw toApiError(error);
  }
};
