import { TextField, Button, Box, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormContainer } from '../components/TodoForm/TodoForm.styles';

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    // reset form fields
    setCredentials({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <FormContainer>
        <Box sx={{ width: '60%' }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ display: 'flex', justifyContent: 'center' }}>
            Login
          </Typography>
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <div>
              <TextField
                id="email"
                label="Email"
                value={credentials.email}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                fullWidth
              />
            </div>
            <div>
              <TextField
                id="password"
                label="Password"
                value={credentials.password}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                fullWidth
                type="password"
              />
            </div>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px'
              }}
            >
              <Button variant="contained" color="primary" type="submit" sx={{width: '40%',padding : '10px'}}>
                Log In
              </Button>
            </Box>
          </form>
        </Box>
      </FormContainer>
      <Typography variant="body1" style={{ marginTop: '20px', textAlign: 'center' }}>
        Don't have an account? <Link to="/signup" sx={{ color: 'blue' }}>Sign Up</Link>
      </Typography>
    </>
  );
}

export default SignIn;
