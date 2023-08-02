import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodo } from '../store/todos/todosReducer';
import { selectTodoByTitle } from '../store/todos/todosSelector';
import TodoForm from '../components/TodoForm/TodoForm';

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
        dispatch(updateTodo(todo));
        console.log("Todo has been updated:", todo);

        // After update, redirect to todos page
        navigate('/myTodos');
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
