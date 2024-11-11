import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Collapse, Paper } from '@mui/material';
import { MouseEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { TodoDetail, TodoList } from '@/components';
import { useCreateTodo, useGetTodoList, useRemoveTodo, useUpdateTodo } from '@/hooks/queries/todo';
import { Todo } from '@/types/client/todo';

function Home() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { todoList } = useGetTodoList();
  const { createTodo } = useCreateTodo();
  const { updateTodo } = useUpdateTodo();
  const { removeTodo } = useRemoveTodo();

  const [isOpen, setIsOpen] = useState(true);
  const [selectedTodoId, setSelectedTodoId] = useState('');
  const [isCreateMode, setIsCreateMode] = useState(true);

  const handleTodoClick = (selectedId: string) => {
    setSelectedTodoId(selectedId);
    setIsCreateMode(false);
    navigate(`/${selectedId}`);
  };

  const handleCreateTodoClick = () => {
    setIsCreateMode(true);
    setIsOpen(true);
    setSelectedTodoId('');
  };

  const handleCreate = (newTodo: { title: string; content: string }) => {
    createTodo(newTodo);
  };

  const handleUpdate = (todo: Todo) => {
    updateTodo(todo);
  };

  const handleDelete = (id: string) => {
    removeTodo({ id });
  };

  const handleToggle = (e: MouseEvent<HTMLLIElement>, id: string) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof SVGElement) return;

    setIsOpen(() => {
      if (isOpen && selectedTodoId === id) return false;
      else return true;
    });
  };

  useEffect(() => {
    if (id) {
      setIsCreateMode(false);
      setSelectedTodoId(id);
    } else if (todoList && todoList.length > 0) {
      setIsCreateMode(false);
      setSelectedTodoId(todoList[0].id);
    }
  }, [id, todoList]);

  if (!todoList) return <div>...Loading</div>;

  const selectedTodo = todoList.find((todo) => todo.id === selectedTodoId) ?? todoList[0];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 2 }}>
      <Box
        sx={{
          flex: 1,
          background: '#f0f3ff',
          minHeight: 'calc(100vh - 112px)',
          borderRadius: 3,
          padding: 3,
        }}
      >
        <Button
          variant='contained'
          color='primary'
          onClick={handleCreateTodoClick}
          sx={{
            width: '30px',
            height: '30px',
            padding: 0,
            minWidth: 0,
            minHeight: 0,
          }}
        >
          <AddIcon sx={{ fontSize: 20 }} />
        </Button>

        <TodoList
          todoList={todoList}
          selectedTodoId={selectedTodoId}
          handleDelete={handleDelete}
          handleClick={handleTodoClick}
          handleToggle={handleToggle}
        />
      </Box>

      {todoList.length > 0 && (
        <Collapse in={isOpen} sx={{ flex: 1 }}>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
            {isCreateMode ? (
              <TodoDetail key='createMode' handleCreate={handleCreate} />
            ) : (
              <TodoDetail
                key='updateMode'
                todo={selectedTodo}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
              />
            )}
          </Paper>
        </Collapse>
      )}
    </Box>
  );
}

export default Home;
