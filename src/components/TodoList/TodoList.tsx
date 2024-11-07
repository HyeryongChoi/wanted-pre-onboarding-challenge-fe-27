import { Box, Collapse, List, Paper, Typography } from '@mui/material';

import TodoDetail from '@/components/TodoDetail/TodoDetail';
import TodoItem from '@/components/TodoItem/TodoItem';
import { Todo } from '@/types/client/todo';
import { MouseEvent, useState } from 'react';

interface TodoListProps {
  todoList: Todo[];
}

export default function TodoList(props: TodoListProps) {
  const { todoList } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState('');

  const selectedTodo = todoList.find((todo) => todo.id === selectedTodoId) ?? todoList[0];

  const handleToggle = (e: MouseEvent<HTMLLIElement>, id: string) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof SVGElement) return;

    setIsOpen(() => {
      if (isOpen && selectedTodoId === id) return false;
      else return true;
    });
  };

  const handleTodoClick = (selectedId: string) => {
    setSelectedTodoId(selectedId);
  };

  const handleUpdate = (id: string, newTitle: string, newContent: string) => {
    /** @todo */
    console.log(id, newTitle, newContent);
  };

  const handleDelete = (id: string) => {
    /** @todo */
    console.log(id);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 2 }}>
      {todoList.length === 0 ? (
        <Typography variant='h6' color='textSecondary'>
          Please add a new todo
        </Typography>
      ) : (
        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            flex: 1,
            background: 'aliceblue',
            minHeight: 'calc(100vh - 48px)',
            borderRadius: 3,
            padding: 3,
          }}
        >
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              selectedId={isOpen ? selectedTodoId : ''}
              handleClick={handleTodoClick}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          ))}
        </List>
      )}

      <Collapse in={isOpen} sx={{ flex: 1 }}>
        <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
          <TodoDetail todo={selectedTodo} handleUpdate={handleUpdate} handleDelete={handleDelete} />
        </Paper>
      </Collapse>
    </Box>
  );
}
