import React, { useContext, useEffect } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const Todos = () => {
  const todoList = useSelector((state) => state.todoList);

  useEffect(() => {
    console.log("todoList", todoList);
  }, [todoList]);

  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">
          <AddTodo />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {todoList.todos &&
            todoList.todos.length > 0 &&
            todoList.todos.map((todo, index) => {
              return <Todo key={index} todo={todo} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Todos;
