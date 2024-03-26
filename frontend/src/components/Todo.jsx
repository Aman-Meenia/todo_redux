import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateStatus } from "../features/todoSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Todo({ todo }) {
  const loading = false;

  const [isTodoModified, setIsTodoModified] = useState(false);
  console.log("works ");
  const dispatch = useDispatch();
  const [todoCheck, setTodoCheck] = useState(false);

  const handleCompleteTodo = async (e) => {
    e.preventDefault();
    console.log(todoCheck);
    setIsTodoModified(false);

    setTodoCheck(todoCheck);
    dispatch(updateStatus({ name: todo.name }));
    console.log("completed ", todo.completed);
    // completeTodo({ id: todo._id });
  };
  const handleInputChange = (e) => {
    e.preventDefault();
    console.log("works");
    if (todo.completed === false) {
      console.log("working ");
      setIsTodoModified(true);
    } else {
      console.log("completed ");
      toast.error("Todo is completed");
    }
  };
  const handleUpdateTodo = (e) => {
    e.preventDefault();
    console.log(todoCheck);
    setTodoCheck(todoCheck);
    dispatch(updateTodo({ name: todo.name }));
    console.log("completed ", todo.completed);
    // completeTodo({ id: todo._id });
  };

  const handleTodoDelete = (e) => {
    e.preventDefault();
    console.log("delete works");
    dispatch(deleteTodo({ name: todo.name }));
  };

  // const [todoCheck, setTodoCheck] = useState("");
  console.log("todo is ");
  console.log(todo);
  return (
    <>
      <div
        className="flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50
        duration-300  text-black w-full"
      >
        {/* <input */}
        {/*   type="checkbox" */}
        {/*   className="cursor-pointer" */}
        {/*   onClick={handleCompleteTodo} */}
        {/*   onChange={(e) => setTodoCheck(todo?.completed)} */}
        {/*   checked={todo?.completed} */}
        {/* /> */}
        <input
          type="text"
          className="border outline-none w-full bg-transparent rounded-lg text-white p-1 "
          value={todo?.name}
          // disabled={!isTodoModified}
          readOnly
        />

        <Link to={`/update/${todo.name}`}>
          <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50">
            {todo.completed ? "✅" : "✏️"}
          </button>
        </Link>

        <button
          onClick={handleTodoDelete}
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        >
          {loading ? "⏳" : "❌"}
        </button>
      </div>
    </>
  );
}

export default Todo;
