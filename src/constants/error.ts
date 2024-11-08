export const ERROR_STATUS = {
  UNEXPECTED_ERROR: 'UNEXPECTED_ERROR',
  FETCH_ERROR: 'FETCH_ERROR',
  LOCAL_STORAGE_GET_ITEM_ERROR: 'LOCAL_STORAGE_GET_ITEM_ERROR',
  LOCAL_STORAGE_SET_ITEM_ERROR: 'LOCAL_STORAGE_SET_ITEM_ERROR',
  CLIENT_ERROR: 'CLIENT_ERROR',
  UNAUTHORIZED_ERROR: 'UNAUTHORIZED_ERROR',
  FORBIDDEN_ERROR: 'FORBIDDEN_ERROR',
  NOT_FOUND_ERROR: 'NOT_FOUND_ERROR',
  CONFLICT_ERROR: 'CONFLICT_ERROR',
  SERVER_ERROR: 'SERVER_ERROR',
  POST_USER_INFO_ERROR: 'POST_USER_INFO_ERROR',
  EMAIL_ALREADY_EXISTING_ERROR: 'EMAIL_ALREADY_EXISTING_ERROR',
  GET_USER_SESSION_ERROR: 'GET_USER_SESSION_ERROR',
} as const;

export const ERROR_CODES = [1000, 1100, 3100, 3200, 4000, 4010, 4030, 4040, 4090, 5000, 6100, 6200, 6300] as const;

export const ERROR_CODE: Record<keyof typeof ERROR_STATUS, (typeof ERROR_CODES)[number]> = {
  // General errors (1000-1999)
  UNEXPECTED_ERROR: 1000,
  FETCH_ERROR: 1100,

  // Storage errors (3000-3999)
  LOCAL_STORAGE_GET_ITEM_ERROR: 3100,
  LOCAL_STORAGE_SET_ITEM_ERROR: 3200,

  // Client-side errors (4000-4999)
  CLIENT_ERROR: 4000,
  UNAUTHORIZED_ERROR: 4010,
  FORBIDDEN_ERROR: 4030,
  NOT_FOUND_ERROR: 4040,
  CONFLICT_ERROR: 4090,

  // Server-side errors (5000-5999)
  SERVER_ERROR: 5000,

  // User-related errors (6000-6999)
  POST_USER_INFO_ERROR: 6100,
  EMAIL_ALREADY_EXISTING_ERROR: 6200,
  GET_USER_SESSION_ERROR: 6300,
} as const;

const RETRY_MESSAGE = '잠시 후 다시 시도해주세요.' as const;

export const ERROR_MESSAGE: Record<keyof typeof ERROR_STATUS, string> = {
  UNEXPECTED_ERROR: `An unexpected error has occurred.\n${RETRY_MESSAGE}`,
  FETCH_ERROR: `There was an issue while fetching data.\n${RETRY_MESSAGE}`,
  LOCAL_STORAGE_GET_ITEM_ERROR: 'The specified item is not found in local storage.',
  LOCAL_STORAGE_SET_ITEM_ERROR:
    'Unable to store the item in local storage. Please enable local storage or check the available space.',
  CLIENT_ERROR: `The request is invalid.\n${RETRY_MESSAGE}`,
  UNAUTHORIZED_ERROR: '\nUser information does not match.\nPlease check your email or password.',
  FORBIDDEN_ERROR: 'You do not have permission to access this resource.',
  NOT_FOUND_ERROR: 'The requested page could not be found.',
  CONFLICT_ERROR:
    'There is a conflict with the current resource state, and the requested operation cannot be completed.',
  SERVER_ERROR: `There was an issue with the server.\nIf this issue persists, please contact us at chex1004@gmail.com.`,
  POST_USER_INFO_ERROR: 'The sign-up request has failed.',
  EMAIL_ALREADY_EXISTING_ERROR: 'Sign-up failed.\nThis email is already registered.',
  GET_USER_SESSION_ERROR: 'Failed to retrieve user session information.',
};
