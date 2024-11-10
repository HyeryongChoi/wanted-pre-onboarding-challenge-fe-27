import { List, Typography } from '@mui/material';

import TodoItem from '@/components/TodoItem/TodoItem';
import { Todo } from '@/types/client/todo';
import { MouseEvent } from 'react';

interface TodoListProps {
  todoList: Todo[];
  selectedTodoId?: string;
  handleClick: (selectedId: string) => void;
  handleDelete: (id: string) => void;
  handleToggle: (e: MouseEvent<HTMLLIElement>, id: string) => void;
}

export default function TodoList(props: TodoListProps) {
  const { todoList, selectedTodoId = '', handleClick, handleDelete, handleToggle } = props;

  return todoList.length === 0 ? (
    <Typography variant='h6' color='textSecondary'>
      Please add a new todo
    </Typography>
  ) : (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          selectedId={selectedTodoId}
          handleClick={handleClick}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </List>
  );
}
