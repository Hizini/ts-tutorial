import React, { useState, useEffect } from "react";

interface todoValue {
  item: string;
}

interface todoItem {
  index: number;
  item: string;
}

interface todoList {
  todoList: todoItem[];
}

function TodoList() {
  const [todoValue, setTodoValue] = useState<todoValue>({
    item: "",
  });

  const [todoItem, setTodoItem] = useState<todoItem>({
    index: 0,
    item: "",
  });

  const [todoList, setTodoList] = useState<todoList>({
    todoList: [],
  });

  console.log(todoValue, todoItem, todoList, typeof todoList);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodoValue({
      item: value,
    });
  };

  const handleClickAdd = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setTodoItem({
      index: todoItem.index + 1,
      item: todoValue.item,
    });
    if (todoValue.item === "") return alert("내용을 입력하세요");
  };

  const handleDelete = (i: number) => {
    todoList.todoList.splice(i, 1);
    setTodoList({ todoList: todoList.todoList });
  };

  useEffect(() => {
    setTodoValue({ item: "" });
    if (todoItem.item !== "") {
      setTodoList({ todoList: todoList.todoList.concat(todoItem) });
    }
  }, [todoItem]);

  useEffect(() => {}, [todoList]);

  const TodoList = todoList.todoList.map((data, i) => (
    <div key={i}>
      <span>{data.item}</span>
      <span>
        <button type="button" onClick={() => handleDelete(i)}>
          삭제
        </button>
      </span>
    </div>
  ));

  return (
    <div>
      <h2>Todo</h2>
      <div>
        <input
          type="text"
          name="todo"
          value={todoValue.item}
          onChange={handleInput}
        />
        <button type="button" onClick={handleClickAdd}>
          추가
        </button>
      </div>
      <div>{TodoList}</div>
    </div>
  );
}

export default TodoList;
