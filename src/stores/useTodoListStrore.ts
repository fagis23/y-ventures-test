import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type TODOS_TYPES = {
  id: number;
  value: string;
  isComplete: boolean;
};

export type FILTER_TYPES = "all" | "complete" | "pending";

export type STORE_TYPES = {
  todos: TODOS_TYPES[];
  filter: FILTER_TYPES;
  setFilter: (value: FILTER_TYPES) => any;
  onAddTodos: (value: string) => void;
  onCheckedTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
};

const useTodoListStore = create<STORE_TYPES>()(
  persist(
    (set, get) => ({
      todos: [],
      filter: "all",
      setFilter: (filter) => set({ filter }),
      onAddTodos: (value) => {
        const tempTodos = get().todos;
        const todo: TODOS_TYPES = {
          id: Math.floor(Math.random() * 1000000000),
          value,
          isComplete: false,
        };
        set({ todos: [...tempTodos, todo] });
      },
      onCheckedTodo: (id) => {
        const tempTodo = [...get().todos];
        const todoIdx = tempTodo.findIndex((todo) => todo.id === id);
        tempTodo[todoIdx].isComplete = !tempTodo[todoIdx].isComplete;
        set({ todos: tempTodo });
      },
      onDeleteTodo: (id) => {
        const tempTodo = [...get().todos];
        const deleteTodo = tempTodo.filter((todo) => todo.id !== id);
        set({ todos: deleteTodo });
      },
    }),
    {
      name: "todolist-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useTodoListStore;
