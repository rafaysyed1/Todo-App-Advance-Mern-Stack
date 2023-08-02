import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, Box, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { deleteTodo } from '../store/todos/todosReducer';
import { toast } from 'react-toastify';
import ConfirmDialog from '../../src/components/ConfirmDialog/ConfirmDialog';  // Assuming you've your ConfirmDialog component in same folder

const MyTodos = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const completeDilogTitle = "Todo Completion";
  const completeDilogContent = "Are you sure you have completed this task.This todo is removing from this list"
  const deleteDilogTitle = "Todo Deletion";
  const deleteDilogContent = "Are you sure you have want to delete this Todo.This action can't be undone."
  //Dialog Box Logic 
  const [selectedTodoToDelete, setSelectedTodoToDelete] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedTodoToComplete, setSelectedTodoToComplete] = useState(null);
  const [openCompleteDialog, setOpenCompleteDialog] = useState(false);

  const todos = useSelector(state => state.todos.todos);

  const handleUpdate = (todo) => {
    navigate(`/updateTodo/${todo.title}`);
  };
  const handleDelete = (todo) => {
    setSelectedTodoToDelete(todo);
    setOpenDeleteDialog(true);
  };
  const handleComplete = (todo) => {
    setSelectedTodoToComplete(todo);
    setOpenCompleteDialog(true);
  };

  return (
    <>
      <ConfirmDialog
        open={openDeleteDialog}
        title={deleteDilogTitle}
        DialogContentTextProp={deleteDilogContent}
        onClose={() => setOpenDeleteDialog(false)}
        onConfirm={() => {
          if (selectedTodoToDelete) {
            dispatch(deleteTodo(selectedTodoToDelete.title));
            toast.success("Successfully Deleted ${selectedTodoToComplete.title} todo");
          }
          setOpenDeleteDialog(false);
        }}
      />
      <ConfirmDialog
        title={completeDilogTitle}
        DialogContentTextProp={completeDilogContent}
        open={openCompleteDialog}
        onClose={() => setOpenCompleteDialog(false)}
        onConfirm={() => {
          if (selectedTodoToComplete) {
            dispatch(deleteTodo(selectedTodoToComplete.title));
            toast.success(`Congratulations on completing your todo ${selectedTodoToComplete.title}.`);
          }
          setOpenCompleteDialog(false);
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <TableContainer component={Paper} sx={{ width: '50%' }}>
          <h1 style={{ textAlign: 'center', margin: '20px 0' }}>My Todos</h1>
          <Table aria-label="simple table" size='medium'>
            <TableHead sx={{ backgroundColor: 'primary.main', color: 'white' }}>
              <TableRow>
                <TableCell color='inherit'>Title</TableCell>
                <TableCell color='inherit'>Description</TableCell>
                <TableCell color='inherit'>Date</TableCell>
                <TableCell color='inherit'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todos.map((todo, index) => (
                <TableRow key={index}>
                  <TableCell>{todo.title}</TableCell>
                  <TableCell>{todo.description}</TableCell>
                  <TableCell>{todo.date}</TableCell>
                  <TableCell>
                    <Box display="flex" justifyContent="space-between">
                      <Button variant="contained" color="primary" onClick={() => handleUpdate(todo)}>
                        Update
                      </Button>
                      <Button variant="contained" color="error" onClick={() => handleDelete(todo)} style={{ marginLeft: '10px' }}>
                        Delete
                      </Button>
                      <Button variant="contained" color="success" onClick={() => handleComplete(todo)} style={{ marginLeft: '10px' }}>
                        Completed
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default MyTodos;
