import * as Types from './types';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient, ApolloClientContext } from '../lib/withApollo';
export async function getServerPageGetAllPeople(
  options: Omit<Apollo.QueryOptions<Types.GetAllPeopleQueryVariables>, 'query'>,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetAllPeopleQuery>({
    ...options,
    query: Operations.GetAllPeopleDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetAllPeople = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.GetAllPeopleQuery,
    Types.GetAllPeopleQueryVariables
  >
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetAllPeopleDocument, options);
};
export type PageGetAllPeopleComp = React.FC<{
  data?: Types.GetAllPeopleQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetAllPeople =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<
      Types.GetAllPeopleQuery,
      Types.GetAllPeopleQueryVariables
    >
  ) =>
  (WrappedComponent: PageGetAllPeopleComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetAllPeopleDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetAllPeople = {
  getServerPage: getServerPageGetAllPeople,
  withPage: withPageGetAllPeople,
  usePage: useGetAllPeople,
};
export async function getServerPageGetPerson(
  options: Omit<Apollo.QueryOptions<Types.GetPersonQueryVariables>, 'query'>,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetPersonQuery>({
    ...options,
    query: Operations.GetPersonDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetPerson = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<Types.GetPersonQuery, Types.GetPersonQueryVariables>
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetPersonDocument, options);
};
export type PageGetPersonComp = React.FC<{
  data?: Types.GetPersonQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetPerson =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetPersonQuery, Types.GetPersonQueryVariables>
  ) =>
  (WrappedComponent: PageGetPersonComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetPersonDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetPerson = {
  getServerPage: getServerPageGetPerson,
  withPage: withPageGetPerson,
  usePage: useGetPerson,
};
export async function getServerPageGetAllPlanets(
  options: Omit<
    Apollo.QueryOptions<Types.GetAllPlanetsQueryVariables>,
    'query'
  >,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetAllPlanetsQuery>({
    ...options,
    query: Operations.GetAllPlanetsDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetAllPlanets = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.GetAllPlanetsQuery,
    Types.GetAllPlanetsQueryVariables
  >
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetAllPlanetsDocument, options);
};
export type PageGetAllPlanetsComp = React.FC<{
  data?: Types.GetAllPlanetsQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetAllPlanets =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<
      Types.GetAllPlanetsQuery,
      Types.GetAllPlanetsQueryVariables
    >
  ) =>
  (WrappedComponent: PageGetAllPlanetsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetAllPlanetsDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetAllPlanets = {
  getServerPage: getServerPageGetAllPlanets,
  withPage: withPageGetAllPlanets,
  usePage: useGetAllPlanets,
};
