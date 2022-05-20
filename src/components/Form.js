import React, { useState, useEffect } from "react";

const initialFormValues = { key: "", content: "", isDone: false };

const Form = ({ todos, setTodos, activeTodos, setActiveTodos }) => {
  const [form, setForm] = useState({ key: "", content: "", isDone: false });

  useEffect(() => {
    setForm(initialFormValues);
  }, [todos]);
  const onChangeInput = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      key: `todo#${todos.length + 1}`,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.content === "") {
      return false;
    }
    setTodos([...todos, form]);
    setActiveTodos([...activeTodos, form]);
  };
  console.log(todos);
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Please insert a todo item"
          onChange={onChangeInput}
          name="content"
          value={form.content}
        />
        <button className="btn">
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  );
};

export default Form;
