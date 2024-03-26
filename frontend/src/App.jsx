import Todos from "./components/Todos";
import { Routes, Route } from "react-router-dom";
import UpdateTodo from "./components/UpdateTodo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/update/:name" element={<UpdateTodo />} />
      </Routes>
    </>
  );
}

export default App;
