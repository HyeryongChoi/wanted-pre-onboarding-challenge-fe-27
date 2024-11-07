import { Clear, Create, Done } from '@mui/icons-material';
import {
  Box,
  Checkbox,
  Collapse,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent, MouseEvent, useState } from 'react';

import { Todo } from '@/types/client/todo';

interface TodoItemProps {
  todo: Todo;
  handleUpdate: (id: string, newTitle: string, newContent: string) => void;
  handleDelete: (id: string) => void;
}

export default function TodoItem(props: TodoItemProps) {
  const { todo, handleUpdate, handleDelete } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newContent, setNewContent] = useState(todo.content);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewContent(e.target.value);
  };

  const handleSave = () => {
    handleUpdate(todo.id, newTitle, newContent);
    setIsEditing(false);
    setIsOpen(true);
  };

  const handleToggle = (e: MouseEvent<HTMLLIElement>) => {
    const target = e.target;

    if (
      target instanceof HTMLInputElement ||
      target instanceof SVGElement ||
      (target instanceof HTMLElement && target.closest('button'))
    ) {
      return;
    }

    setIsOpen(!isOpen);
  };

  return (
    <>
      <ListItem
        role='listitem'
        onClick={handleToggle}
        sx={{
          cursor: 'pointer',
          backgroundColor: '#ffffff',
          borderRadius: 2,
          boxShadow: 2,
          transition: 'background-color 0.3s, box-shadow 0.3s',
          '&:hover': {
            backgroundColor: '#f5f9ff',
          },
          height: '80px',
        }}
      >
        <ListItemIcon>
          <Checkbox tabIndex={-1} />
        </ListItemIcon>

        <ListItemText>
          {isEditing ? (
            <TextField value={newTitle} onChange={handleTitleChange} fullWidth variant='outlined' label='Title' />
          ) : (
            <Typography variant='body1' color='textPrimary' fontWeight='bold'>
              {todo.title}
            </Typography>
          )}
        </ListItemText>

        {isEditing ? (
          <IconButton color='info' aria-label='Save' onClick={() => handleSave()}>
            <Done fontSize='small' />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color='info' aria-label='Update' onClick={() => setIsEditing(true)}>
              <Create fontSize='small' />
            </IconButton>

            <IconButton color='info' aria-label='Delete' onClick={() => handleDelete(todo.id)}>
              <Clear fontSize='small' />
            </IconButton>
          </Box>
        )}
      </ListItem>

      <Collapse in={isOpen || isEditing}>
        <Paper
          sx={{ padding: 2, backgroundColor: '#ffffff', borderRadius: 1, boxShadow: 1, marginTop: 1, marginBottom: 1 }}
        >
          {isEditing ? (
            <TextField
              value={newContent}
              onChange={handleContentChange}
              fullWidth
              variant='outlined'
              label='Content'
              multiline
              rows={4}
            />
          ) : (
            <Typography variant='body2' color='textSecondary'>
              {todo.content}
            </Typography>
          )}
        </Paper>
      </Collapse>
    </>
  );
}
