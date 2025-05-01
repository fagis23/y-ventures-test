import React, { useState } from "react";
import "./App.css";
import PostIntegration from "./section/PostIntegration";
import TodoList from "./section/TodoList";

const App = () => {
  const [section, setSection] = useState("todo");
  return (
    <>
      <div className="button-section">
        <button onClick={() => setSection("todo")}>To Do List Section</button>
        <button onClick={() => setSection("post")}>Post Integration</button>
      </div>

      {section === "todo" ? <TodoList /> : <PostIntegration />}
    </>
  );
};

export default App;
