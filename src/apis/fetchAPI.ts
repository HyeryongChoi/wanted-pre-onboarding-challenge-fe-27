import { ERROR_STATUS } from '@/constants/error';

import CustomError from '@/utils/CustomError';

export const fetchAPI = async <T>(url: RequestInfo, options?: RequestInit): Promise<T | null> => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      if (response.status >= 500) throw new CustomError(ERROR_STATUS.SERVER_ERROR);
      if (response.status === 401) throw new CustomError(ERROR_STATUS.UNAUTHORIZED_ERROR);
      if (response.status === 403) throw new CustomError(ERROR_STATUS.FORBIDDEN_ERROR);
      if (response.status === 404) throw new CustomError(ERROR_STATUS.NOT_FOUND_ERROR);
      if (response.status === 409) throw new CustomError(ERROR_STATUS.CONFLICT_ERROR);
      if (response.status >= 400) throw new CustomError(ERROR_STATUS.CLIENT_ERROR);
    }

    const contentType = response.headers.get('content-type');
    const isJsonType = contentType && contentType.includes('application/json');

    if (isJsonType) return response.json();

    return null;
  } catch (error) {
    if (error instanceof CustomError) throw error;
    throw new CustomError(ERROR_STATUS.FETCH_ERROR);
  }
};

export const fetchAPIWithToken = async <T>(
  url: RequestInfo,
  token: string = '',
  options?: RequestInit,
): Promise<T | null> => {
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  return fetchAPI(url, { ...options, headers });
};
