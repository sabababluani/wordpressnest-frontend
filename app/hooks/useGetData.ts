import useSWR from 'swr';
import BaseApi from '../api/BaseApi';
import { CrudServiceProps } from '../interfaces/crud-service-props.interface';

/**
 * Hook to GET data using SWR and Axios
 * @param endpoint API endpoint
 * @param queryParams Optional query parameters
 */
export const useGetData = <T>({
  endpoint,
  queryParams = {},
}: CrudServiceProps<T>) => {
  const queryString = new URLSearchParams(
    queryParams as Record<string, string>,
  ).toString();
  const url = queryString ? `${endpoint}?${queryString}` : endpoint;

  const { data, error, mutate } = useSWR<T, Error>(url, async (url: string) => {
    try {
      const response = await BaseApi.get<T>(url);
      return response.data;
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to fetch data';
      throw new Error(errorMessage);
    }
  });

  return {
    data,
    error,
    isLoading: !error && !data,
    mutate,
  };
};
