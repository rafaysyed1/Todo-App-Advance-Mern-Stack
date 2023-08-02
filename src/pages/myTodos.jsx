import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { deleteTodo } from '../store/todos/todosReducer'; // Import the deleteTodo action

const MyTodos = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Use the useDispatch hook

  // Use the useSelector hook to select the todos from the Redux store
  const todos = useSelector(state => state.todos.todos);

  const handleUpdate = (todo) => {
    navigate(`/updateTodo/${todo.title}`);
  };

  const handleDelete = (todo) => {
    dispatch(deleteTodo(todo.title)); // Dispatch the deleteTodo action
  };

  const handleComplete = (todo) => {
    const confirmComplete = window.confirm(`Are you sure to mark this task as Completed?`);
    if (confirmComplete) {
      alert(`Your task ${todo.title} is completed and now removing from the list.`);
      dispatch(deleteTodo(todo.title)); // Dispatch the deleteTodo action
    }
  };

  return (
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
                  <Button variant="contained" color="primary" onClick={() => handleUpdate(todo)}>
                    Update
                  </Button>
                  <Button variant="contained" color="error" onClick={() => handleDelete(todo)} style={{ marginLeft: '10px' }}>
                    Delete
                  </Button>
                  <Button variant="contained" color="success" onClick={() => handleComplete(todo)} style={{ marginLeft: '10px' }}>
                    Completed
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MyTodos;
