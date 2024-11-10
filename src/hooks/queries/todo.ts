import { deleteTodo, getTodo, getTodoList, postTodo, putTodo } from '@/apis/todo';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const QUERY_KEY = {
  TODO_LIST: 'todoList',
};

export const useGetTodoList = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [QUERY_KEY.TODO_LIST],
    queryFn: getTodoList,
  });

  return {
    todoList: data,
    ...restQuery,
  };
};

export const useGetTodo = (id: string) => {
  const { data, ...restQuery } = useQuery({
    queryKey: [QUERY_KEY.TODO_LIST, id],
    queryFn: () => getTodo({ id }),
  });

  return {
    todo: data,
    ...restQuery,
  };
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  const { mutate: createTodo, ...restMutation } = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.TODO_LIST] });

      alert('A new todo has been added');
    },
  });

  return { createTodo, ...restMutation };
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  const { mutate: updateTodo, ...restMutation } = useMutation({
    mutationFn: putTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.TODO_LIST] });

      alert('The todo has been updated');
    },
  });

  return { updateTodo, ...restMutation };
};

export const useRemoveTodo = () => {
  const queryClient = useQueryClient();

  const { mutate: removeTodo, ...restMutation } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.TODO_LIST] });

      alert('The todo has been removed');
    },
  });

  return { removeTodo, ...restMutation };
};
