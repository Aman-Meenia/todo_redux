import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
export const useAddTodo = () => {
  const dispatch = useDispatch();

  const addTodoToList = (name) => {
    console.log(name);
    dispatch(addTodo(name));
  };

  return { addTodoToList };
};
