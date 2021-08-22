import React, { useState } from "react";
import './App.css';
import Form from "./components/form";
import TodoList from "./components/todolist";

function App() {

  const [inputText, setInputText] = useState(" ");
  const [todos, setTodos] = useState([]);
  return (

    <div className="masthead bg-primary text-white text-center">
      <header>

        <h1>Smart Todo</h1>
      </header>




      <Form todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList />
    </div>


  );


}

export default App;
