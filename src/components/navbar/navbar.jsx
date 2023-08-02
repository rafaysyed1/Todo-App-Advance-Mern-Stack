import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Link to={'/'}>
        <Typography variant="h4" component="h1" sx={{color: 'white'}}>
          To-Do
        </Typography>
        </Link>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
