import BaseApi from './BaseApi';

/**
 * Post Request
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
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred during createData');
    }
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
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred during updateData');
    }
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
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred during patchData');
    }
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
    const url = id ? `${endpoint}/${id}` : endpoint;
    await BaseApi.delete(url, { data: payload });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred during deleteData');
    }
  }
};
