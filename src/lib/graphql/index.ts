import { request } from 'graphql-request'

export const base_url = "https://strapi.mandorle.gr"
export const endpoint = base_url + '/graphql';

export async function fetchGraphQL(query: string, variables: unknown) : Promise<unknown> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return await request(endpoint, query, variables);
}


