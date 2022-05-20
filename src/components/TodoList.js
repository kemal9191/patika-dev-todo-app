import React from "react";

const TodoList = ({ todos, setTodos, activeTodos, setActiveTodos }) => {
  const changeStatus = (e) => {
    const changedList = todos.map((todo) => {
      if (todo.key === e.target.id) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return todo;
      }
    });
    setTodos(changedList);
  };
  const deleteTodos = (e) => {
    const newTodos = todos.filter((todo) => todo.key !== e.target.id);
    setTodos(newTodos);
    setActiveTodos(newTodos);
    console.log(e.target.id);
  };

  console.log(todos);
  console.log(todos);
  return (
    <div className="todolist-container">
      <ul>
        {activeTodos.map((todo) => (
          <>
            {todo.isDone ? (
              <li className="completed todo-item" key={todo.key}>
                <div onClick={deleteTodos}>
                  <button className="btn" id={todo.key}>
                    <i
                      id={todo.key}
                      className="fa-solid fa-trash-can delete-btn"
                    ></i>
                  </button>
                  {todo.content}
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  id={todo.key}
                  onChange={changeStatus}
                />
              </li>
            ) : (
              <li className="todo-item" key={todo.key}>
                <div onClick={deleteTodos}>
                  <button className="btn" id={todo.key}>
                    <i
                      id={todo.key}
                      className="fa-solid fa-trash-can delete-btn"
                    ></i>
                  </button>
                  {todo.content}
                </div>
                <input type="checkbox" id={todo.key} onChange={changeStatus} />
              </li>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
