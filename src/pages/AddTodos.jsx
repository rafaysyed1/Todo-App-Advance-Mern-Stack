
import TodoForm from "../components/TodoForm/TodoForm";
import { addTodo } from "../store/todos/todosReducer";
import { useDispatch } from "react-redux";

const AddTodos = () => {
    const dispatch = useDispatch();

    return (
        <TodoForm
          initialValues={{ title: "", description: "", date: "", completed: false }}
          onSubmit={(todos) => 
            {
                console.log("Todos to be added ",todos)
                dispatch(addTodo(todos))
                console.log("Todos are added Successfully")
            }}
          buttonText="Add"
        />
      );
}

export default AddTodos;
