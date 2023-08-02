import { TextField, Button, Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormContainer } from './TodoForm.styles';

const TodoForm = ({ initialValues, onSubmit, buttonText }) => {
  const [todos, setTodos] = useState(initialValues);

  useEffect(() => {
    setTodos(initialValues);
  }, [initialValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(todos);
    setTodos({
      title: "",
      description: "",
      date: "",
      completed: false
    });
  };

  const handleChange = (e) => {
    setTodos({
      ...todos,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <FormContainer>
      <Box sx={{ width: '60%' }}>
        <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} variant="h4" component="h1" gutterBottom>
          {buttonText} Todos
        </Typography>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <div>
            <TextField
              id="title"
              label="Title"
              value={todos.title}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </div>
          <div>
            <TextField
              id="description"
              label="Description"
              value={todos.description}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </div>
          <div>
            <TextField
              id="date"
              label="Date"
              type="date"
              value={todos.date}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </div>
          <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px', marginRight: "20px" }}>
            {buttonText} Todo
          </Button>
          <Link to='/myTodos'>
            <Button variant="contained" color="success" style={{ marginTop: '20px' }}>
              Show Todos
            </Button>
          </Link>
        </form>
      </Box>
    </FormContainer>
  );
};

export default TodoForm;
