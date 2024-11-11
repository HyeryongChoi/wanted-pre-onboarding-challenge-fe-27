import { Todo } from '@/types/client/todo';
import { Box, Button, TextField } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';

interface TodoDetailProps {
  todo?: Todo;
  handleCreate?: (newTodo: { title: string; content: string }) => void;
  handleDelete?: (id: string) => void;
  handleUpdate?: (todo: Todo) => void;
}

export default function TodoDetail(props: TodoDetailProps) {
  const { todo, handleCreate, handleDelete, handleUpdate } = props;
  const [newTitle, setNewTitle] = useState(todo ? todo.title : '');
  const [newContent, setNewContent] = useState(todo ? todo.content : '');
  const [isEditing, setIsEditing] = useState(todo ? false : true);

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
    if (todo) {
      // edit mode
      handleUpdate?.({ id: todo.id, title: newTitle, content: newContent });
    } else {
      // create mode
      handleCreate?.({ title: newTitle, content: newContent });
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    if (todo) {
      // edit mode
      setNewTitle(todo.title);
      setNewContent(todo.content);
      setIsEditing(false);
    } else {
      // create mode
      setNewTitle('');
      setNewContent('');
    }
  };

  const handleDeleteClick = () => {
    if (todo) {
      handleDelete?.(todo.id);
    }
  };

  useEffect(() => {
    if (todo) {
      setNewTitle(todo.title);
      setNewContent(todo.content);
    }
  }, [todo]);

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
            <Button variant='contained' sx={{ backgroundColor: '#ff8eac' }} onClick={handleDeleteClick}>
              Delete
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}
