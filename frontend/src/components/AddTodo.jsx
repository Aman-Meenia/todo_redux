import React, { useContext, useEffect, useState } from "react";
import { useAddTodo } from "../hooks/useAddTodo";
import { useDispatch } from "react-redux";
import { updateStatus } from "../features/todoSlice";
import toast from "react-hot-toast";
// import { useState } from "react";
// import { useAddTodo } from "../hooks/useAddTodo";

function AddTodo() {
  // const { addTodo, loading } = useAddTodo();
  //
  const [name, setName] = useState("");
  const { addTodoToList } = useAddTodo();

  const handleAddTodo = (e) => {
    e.preventDefault();
    console.log(name);
    if (!name) {
      toast.error("Please enter todo");
      return;
    }

    addTodoToList({ name });
    // console.log(name);
    //
    setName("");
  };
  //
  const loading = false;
  return (
    <form className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={handleAddTodo}
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 w-12 h-12"
      >
        {loading ? <span className="loading spinner-loading"></span> : "Add"}
      </button>
    </form>
  );
}

export default AddTodo;
