import React from "react";
import Greetings from "./Study/Greetings";
import { Profile } from "./Study/Profile";
import { Counter } from "./Study/Counter";
import TodoList from "./Study/TodoList";

const App = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return (
    <>
      <Greetings name="Hizini" onClick={onClick} />
      <hr />
      <Profile name="Hizini" job="FE-Developer" />
      <hr />
      <Counter />
      <hr />
      <TodoList />
    </>
  );
};

export default App;
