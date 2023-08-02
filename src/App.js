import './App.css';
import {Route, Routes } from 'react-router-dom';
import Todo from './pages/AddTodos';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import MyTodos from './pages/myTodos';
import Navbar from './components/navbar/navbar';
import UpdateTodo from './pages/updateTodos';



function App() {
  return (
    <div>
     <Navbar/>
      <Routes>
        <Route path='/' element = {<Todo/>} />
        <Route path='/myTodos' element = {<MyTodos/>} />
        <Route path = '/login' element = {<SignIn/>}/>
        <Route path = '/signup' element = {<SignUp/>}/>
        <Route path="/updateTodo/:title" element={<UpdateTodo/>} />

      </Routes>
      </div>
  );
}

export default App;
