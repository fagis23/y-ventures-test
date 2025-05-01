import React, { useState } from "react";
import useTodoListStore from "../../stores/useTodoListStrore";

const SearchInput = () => {
  const [todoValue, setTodoValue] = useState("");
  const onAddTodos = useTodoListStore((state) => state.onAddTodos);
  return (
    <div className="search-box">
      <input
        className="input-todo"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        type="text"
        placeholder="To Do List Add"
      />
      <button
        className="button-todo"
        onClick={() => {
          onAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default SearchInput;
