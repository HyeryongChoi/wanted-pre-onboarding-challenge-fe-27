import { Checkbox, IconButton, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';

import { Todo } from '@/types/client/todo';
import { DeleteForever } from '@mui/icons-material';
import { ChangeEvent, MouseEvent, useState } from 'react';

interface TodoItemProps {
  todo: Todo;
  selectedId?: string;
  handleClick: (selectedId: string) => void;
  handleToggle: (e: MouseEvent<HTMLLIElement>, id: string) => void;
  handleDelete: (id: string) => void;
}

export default function TodoItem(props: TodoItemProps) {
  const { todo, selectedId, handleClick, handleToggle, handleDelete } = props;
  const [checked, setChecked] = useState(false);

  const handleTodoClick = (e: MouseEvent<HTMLLIElement>) => {
    handleClick(todo.id);
    handleToggle(e, todo.id);
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <ListItem
      role='listitem'
      onClick={handleTodoClick}
      sx={{
        cursor: 'pointer',
        backgroundColor: selectedId === todo.id ? '#f5f9ff' : '#ffffff',
        borderRadius: 2,
        boxShadow: 3,
        transition: 'background-color 0.3s, box-shadow 0.3s',
        '&:hover': {
          backgroundColor: '#f5f9ff',
        },
        height: '80px',
      }}
    >
      <ListItemIcon>
        <Checkbox checked={checked} onChange={handleCheckboxChange} />
      </ListItemIcon>

      <ListItemText>
        <Typography
          variant='body1'
          color='textPrimary'
          fontWeight='bold'
          sx={{
            textDecoration: checked ? 'line-through' : 'none',
          }}
        >
          {todo.title}
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          {`created: ${todo.createdAt}`}
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          {`updated: ${todo.updatedAt}`}
        </Typography>
      </ListItemText>

      <IconButton color='info' aria-label='Delete' onClick={() => handleDelete(todo.id)}>
        <DeleteForever fontSize='medium' />
      </IconButton>
    </ListItem>
  );
}
