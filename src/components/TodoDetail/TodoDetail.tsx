import { Box, Button, TextField } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';

import { Todo } from '@/types/client/todo';

interface TodoDetailProps {
  todo: Todo;
  handleDelete: (id: string) => void;
  handleUpdate: (id: string, newTitle: string, newContent: string) => void;
}

export default function TodoDetail(props: TodoDetailProps) {
  const { todo, handleDelete, handleUpdate } = props;
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newContent, setNewContent] = useState(todo.content);
  const [isEditing, setIsEditing] = useState(false);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewContent(e.target.value);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    handleUpdate(todo.id, newTitle, newContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewTitle(todo.title);
    setNewContent(todo.content);
    setIsEditing(false);
  };

  useEffect(() => {
    setNewTitle(todo.title);
    setNewContent(todo.content);
  }, [todo.title, todo.content]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label='Title' variant='outlined' value={newTitle} onChange={handleTitleChange} disabled={!isEditing} />
      <TextField
        label='Content'
        variant='outlined'
        multiline
        rows={10}
        value={newContent}
        onChange={handleContentChange}
        disabled={!isEditing}
      />
      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'right' }}>
        {isEditing ? (
          <>
            <Button variant='contained' color='primary' onClick={handleSave}>
              Save
            </Button>
            <Button variant='contained' sx={{ backgroundColor: '#ff8eac' }} onClick={handleCancel}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button variant='contained' color='primary' onClick={handleEdit}>
              Edit
            </Button>
            <Button variant='contained' sx={{ backgroundColor: '#ff8eac' }} onClick={() => handleDelete(todo.id)}>
              Delete
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}
