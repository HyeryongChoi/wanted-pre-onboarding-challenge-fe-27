import { ERROR_CODE, ERROR_MESSAGE, ERROR_STATUS } from '@/constants/error';

export default class CustomError extends Error {
  status: keyof typeof ERROR_CODE;
  code: (typeof ERROR_CODE)[keyof typeof ERROR_CODE];

  constructor(status: keyof typeof ERROR_STATUS, errorMessage?: string) {
    super(`[ERROR ${ERROR_CODE[status]}]: ${errorMessage ? errorMessage : ERROR_MESSAGE[status]}`);
    this.name = 'CustomError';
    this.status = status;
    this.code = ERROR_CODE[status];
  }
}
