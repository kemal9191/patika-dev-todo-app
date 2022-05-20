import React, { useState, useEffect } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

const Todos = () => {
  const [todos, setTodos] = useState([
    { key: "todo#1", content: "Clean the house", isDone: false },
    { key: "todo#2", content: "Do the homework", isDone: false },
    { key: "todo#3", content: "Cook", isDone: false },
    { key: "todo#4", content: "Go shopping", isDone: false },
  ]);

  const [activeTodos, setActiveTodos] = useState(todos);
  const [categoryNumbers, setCategoryNumbers] = useState([0, 0]);

  const filterTodos = (status) => {
    const filtered = todos.filter((todo) => todo.isDone === status);
    setActiveTodos(filtered);
  };

  useEffect(() => {
    var completed = 0;
    var incompleted = 0;

    todos.map((todo) => {
      if (todo.isDone === true) {
        completed++;
      } else if (todo.isDone === false) {
        incompleted++;
      }
      setCategoryNumbers([completed, incompleted]);
    });
    if (todos.length === 0) {
      setCategoryNumbers([0, 0]);
    }
  }, [todos, activeTodos]);

  console.log(activeTodos);
  const [completed, incompleted] = categoryNumbers;

  return (
    <>
      <div className="todo-container">
        <Form
          todos={todos}
          activeTodos={activeTodos}
          setTodos={setTodos}
          setActiveTodos={setActiveTodos}
        />
        <TodoList
          todos={todos}
          activeTodos={activeTodos}
          setTodos={setTodos}
          setActiveTodos={setActiveTodos}
        />
        <div className="btn-container">
          <button className="btn" onClick={() => setActiveTodos(todos)}>
            All ({todos.length})
          </button>
          <button className="btn" onClick={() => filterTodos(true)}>
            Completed ({completed})
          </button>
          <button className="btn" onClick={() => filterTodos(false)}>
            Uncompleted ({incompleted})
          </button>
        </div>
      </div>
    </>
  );
};

export default Todos;
