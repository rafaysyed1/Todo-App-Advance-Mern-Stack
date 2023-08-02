import TodoForm from "../components/TodoForm/TodoForm";
import { addTodo } from "../store/todos/todosReducer";
import { useDispatch } from "react-redux"
import { toast } from 'react-toastify';

const AddTodos = () => {
    const dispatch = useDispatch();

    return (
        <TodoForm
          initialValues={{ title: "", description: "", date: "", completed: false }}
          onSubmit={(todos) => 
            {
                try {
                    console.log("Todos to be added ",todos)
                    dispatch(addTodo(todos))
                    toast.success("You have successfully added the Todo to the store")
                    
                } catch (error) {
                    console.log("Error",error)
                    toast.error("Error in adding todo to the store")
                }
               
            }}
          buttonText="Add"
        />
      );
}

export default AddTodos;
