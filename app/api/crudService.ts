import BaseApi from './BaseApi';

/**
 * Post Request
 * @param endpoint API endpoint
 * @param payload Data to be sent
 */
export const createData = async <T>(
  endpoint: string,
  payload: T extends Record<string, string> ? T : never,
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
 * Update Request
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
 * Patch Request
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
 * Delete Request
 * @param endpoint API endpoint
 * @param id ID of the item to delete
 * @param payload Optional data to be sent in the body of the request
 */
export const deleteData = async <T>(
  endpoint: string,
  id: string | number,
  payload?: T,
): Promise<void> => {
  try {
    await BaseApi.delete(`${endpoint}/${id}`, { data: payload });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Failed to delete data';
    throw new Error(errorMessage);
  }
};
