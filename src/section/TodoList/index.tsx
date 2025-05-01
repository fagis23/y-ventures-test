import React from "react";
import Filter from "./Filter";
import ListTodo from "./ListTodo";
import SearchInput from "./SearchInput";

const TodoList = () => {
  return (
    <div className="container">
      <SearchInput />
      <Filter />
      <ListTodo />
    </div>
  );
};

export default TodoList;
