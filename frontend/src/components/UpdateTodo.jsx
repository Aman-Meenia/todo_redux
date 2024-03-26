import React, { useState } from "react";
import AddTodo from "./AddTodo";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { updateTodoFun } from "../features/todoSlice";
import { useParams } from "react-router-dom";

const UpdateTodo = () => {
  const loading = false;
  const [todoName, setTodoName] = useState("");
  const { name } = useParams();
  const dispatch = useDispatch();
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(todoName);
    dispatch(updateTodoFun({ name: todoName, prename: name }));

    toast.success("Todo Updated");
    // completeTodo({ id: todo._id });
  };

  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Update Your Todo {name}
          </h1>
          <div className="mb-4">
            <form className="flex">
              <input
                type="text"
                placeholder="Update Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoName}
                onChange={(e) => setTodoName(e.target.value)}
              />
              <button
                onClick={handleUpdate}
                type="submit"
                className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 w-18 h-12"
              >
                {loading ? (
                  <span className="loading spinner-loading"></span>
                ) : (
                  "Update"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateTodo;
