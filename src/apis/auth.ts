import { fetchAPI } from '@/apis/fetchAPI';
import { API_URL, BASE_URL } from '@/constants/api';
import { ERROR_STATUS } from '@/constants/error';
import { LoginUserRequest, LoginUserResponse, PostUserRequest, PostUserResponse } from '@/types/api/auth';
import CustomError from '@/utils/CustomError';

export const postUser = async (props: PostUserRequest) => {
  try {
    const response = await fetchAPI<PostUserResponse>(BASE_URL + API_URL.AUTH.SIGN_UP, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props),
    });

    if (!response) throw new CustomError(ERROR_STATUS.POST_USER_INFO_ERROR);

    return response;
  } catch (error) {
    if (error instanceof CustomError) alert(error.message);
  }
};

export const loginUser = async (props: LoginUserRequest) => {
  try {
    const response = await fetchAPI<LoginUserResponse>(BASE_URL + API_URL.AUTH.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props),
    });

    if (!response) throw new CustomError(ERROR_STATUS.UNAUTHORIZED_ERROR);

    return response;
  } catch (error) {
    if (error instanceof CustomError) alert(error.message);
  }
};
