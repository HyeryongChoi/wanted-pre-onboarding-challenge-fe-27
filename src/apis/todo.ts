import { fetchAPIWithToken } from '@/apis/fetchAPI';
import { API_URL, BASE_URL } from '@/constants/api';
import { ERROR_STATUS } from '@/constants/error';
import {
  DeleteTodoRequest,
  DeleteTodoResponse,
  GetTodoListResponse,
  GetTodoRequest,
  GetTodoResponse,
  PostTodoRequest,
  PutTodoRequest,
} from '@/types/api/todo';

import CustomError from '@/utils/CustomError';
import { formatFullDate } from '@/utils/dateUtils';
import TokenService from '@/utils/TokenService';

export const getTodoList = async () => {
  try {
    const response = await fetchAPIWithToken<GetTodoListResponse>(BASE_URL + API_URL.TODOS, TokenService.getToken());

    if (!response) throw new CustomError(ERROR_STATUS.FETCH_ERROR);

    const formattedTodoList = response.data.map((todo) => ({
      ...todo,
      createdAt: formatFullDate(todo.createdAt),
      updatedAt: formatFullDate(todo.updatedAt),
    }));

    return formattedTodoList;
  } catch (error) {
    console.error(error);
  }
};

export const getTodo = async ({ id }: GetTodoRequest) => {
  try {
    const response = await fetchAPIWithToken<GetTodoResponse>(
      `${BASE_URL}${API_URL.TODOS}/${id}`,
      TokenService.getToken(),
    );

    if (!response) throw new CustomError(ERROR_STATUS.FETCH_ERROR);

    const formattedTodo = {
      ...response.data,
      createdAt: formatFullDate(response.data.createdAt),
      updatedAt: formatFullDate(response.data.updatedAt),
    };

    return formattedTodo;
  } catch (error) {
    console.error(error);
  }
};

export const postTodo = async (props: PostTodoRequest) => {
  try {
    const response = await fetchAPIWithToken<GetTodoResponse>(BASE_URL + API_URL.TODOS, TokenService.getToken(), {
      method: 'POST',
      body: JSON.stringify(props),
    });

    if (!response) throw new Error();

    const formattedTodo = {
      ...response.data,
      createdAt: formatFullDate(response.data.createdAt),
      updatedAt: formatFullDate(response.data.updatedAt),
    };

    return formattedTodo;
  } catch (error) {
    console.error(error);
  }
};

export const putTodo = async (props: PutTodoRequest) => {
  try {
    const { id, title, content } = props;
    const response = await fetchAPIWithToken<GetTodoResponse>(
      `${BASE_URL}${API_URL.TODOS}/${id}`,
      TokenService.getToken(),
      {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
      },
    );

    if (!response) throw new Error();

    const formattedTodo = {
      ...response.data,
      createdAt: formatFullDate(response.data.createdAt),
      updatedAt: formatFullDate(response.data.updatedAt),
    };

    return formattedTodo;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodo = async ({ id }: DeleteTodoRequest) => {
  try {
    const response = await fetchAPIWithToken<DeleteTodoResponse>(
      `${BASE_URL}${API_URL.TODOS}/${id}`,
      TokenService.getToken(),
      {
        method: 'DELETE',
      },
    );

    if (!response) throw new Error();

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
