import React from "react";
import useTodoListStore from "../../stores/useTodoListStrore";

const ListTodo = () => {
  const todos = useTodoListStore((state) => state.todos);
  const filter = useTodoListStore((state) => state.filter);
  const onCheckedTodo = useTodoListStore((state) => state.onCheckedTodo);
  const onDeleteTodo = useTodoListStore((state) => state.onDeleteTodo);

  const renderTodos = () => {
    if (filter === "all") return todos;
    return todos.filter((todo) =>
      filter === "complete" ? todo.isComplete : !todo.isComplete
    );
  };
  return (
    <>
      {renderTodos().map((todo) => {
        return (
          <div key={todo.id} className="list-todo">
            <div className="list-todo__left">
              <div className="list-todo__mark">
                <input
                  type="checkbox"
                  checked={todo.isComplete}
                  onChange={() => onCheckedTodo(todo.id)}
                />
              </div>
              <div className="list-todo__text">
                <span>{todo.value}</span>
              </div>
            </div>

            <div
              className="list-todo__delete"
              onClick={() => onDeleteTodo(todo.id)}
            >
              X
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListTodo;
