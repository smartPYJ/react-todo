import React from "react";
import Todo from "./todo";
const TodoList = ({ todos }) => {

    return (
        <div className="container">

            <ul className="">

                {todos.map((todo) => (

                    <Todo  text= {todo.text} />
                ))}

            </ul>


        </div>
    );
};

export default TodoList;