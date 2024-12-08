import BaseApi from './BaseApi';

/**
 * POST data using BaseApi
 * @param endpoint API endpoint
 * @param payload Data to be sent
 */
export const createData = async <T>(
  endpoint: string,
  payload: T,
): Promise<T> => {
  try {
    const response = await BaseApi.post<T>(endpoint, payload);
    return response.data;
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Failed to create data';
    throw new Error(errorMessage);
  }
};

/**
 * PUT data using BaseApi
 * @param endpoint API endpoint
 * @param id ID of the item to update
 * @param payload Data to be updated
 */
export const updateData = async <T>(
  endpoint: string,
  id: string | number,
  payload: Partial<T>,
): Promise<T> => {
  try {
    const response = await BaseApi.put<T>(`${endpoint}/${id}`, payload);
    return response.data;
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Failed to update data';
    throw new Error(errorMessage);
  }
};

/**
 * PATCH data using BaseApi
 * @param endpoint API endpoint
 * @param id ID of the item to update
 * @param payload Data to be partially updated
 */
export const patchData = async <T>(
  endpoint: string,
  id: string | number,
  payload: Partial<T>,
): Promise<T> => {
  try {
    const response = await BaseApi.patch<T>(`${endpoint}/${id}`, payload);
    return response.data;
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Failed to patch data';
    throw new Error(errorMessage);
  }
};

/**
 * DELETE data using BaseApi
 * @param endpoint API endpoint
 * @param id ID of the item to delete
 */
export const deleteData = async (
  endpoint: string,
  id: string | number,
): Promise<void> => {
  try {
    await BaseApi.delete(`${endpoint}/${id}`);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Failed to delete data';
    throw new Error(errorMessage);
  }
};
