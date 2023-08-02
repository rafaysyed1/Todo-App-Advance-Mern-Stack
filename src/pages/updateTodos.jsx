import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodo } from '../store/todos/todosReducer';
import { selectTodoByTitle } from '../store/todos/todosSelector';
import TodoForm from '../components/TodoForm/TodoForm';
import {toast} from 'react-toastify'

const UpdateTodo = () => {
    const { title: todoTitle } = useParams(); // get todo title from URL
    const todoToUpdate = useSelector((state) => selectTodoByTitle(state, todoTitle));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Initialize todo object
    const [todo, setTodo] = useState({
        title: "",
        description: "",
        date: "",
        completed: false,
    });

    useEffect(() => {
        // if updating a todo, fill form with existing details
        if (todoToUpdate) {
            setTodo(todoToUpdate);
        }
    }, [todoToUpdate]);

    const handleSubmit = (todo) => {
        // Dispatch updateTodo action with the todo object
        try {
            dispatch(updateTodo(todo));
            console.log("Todo has been updated:", todo);
            toast.success("You have successfully updated the todo")
    
            // After update, redirect to todos page
            navigate('/myTodos');
            
        } catch (error) {
            console.log("Error occured in updating the todos")
            toast.error("Failed to Update the Todo")
        }
     
    };

    return (
        <TodoForm
            initialValues={todo}
            onSubmit={handleSubmit}
            buttonText="Update"
        />
    );
};

export default UpdateTodo;
