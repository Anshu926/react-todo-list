import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  const name = '{ TODO APP }';

  const [todoList, setTodoList] = useState(() => {
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) : [];
  });

  const [newTodo, setNewTodo] = useState('');

  function handleAddTodo() {
    if (!newTodo.trim()) return alert('Please enter a todo');

    const updatedList = [...todoList, newTodo.trim()];
    setTodoList(updatedList);
    localStorage.setItem('todos', JSON.stringify(updatedList));
    setNewTodo('');
  }

  function handleDelete(indexToDelete) {
    const updatedList = todoList.filter((_, index) => index !== indexToDelete);
    setTodoList(updatedList);
    localStorage.setItem('todos', JSON.stringify(updatedList));
  }

  function renderTodoList() {
    if (todoList.length === 0) {
      return <h3>Todo List is Empty !!</h3>;
    }

    return (
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className="delete_btn" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <h1>Welcome to the React {name}</h1>
      <br />
      <div className="todo_box">
        {renderTodoList()}
        <br />
        <input
          type="text"
          placeholder="Enter your todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="todo_input"
        />
        <button className="add_btn" onClick={handleAddTodo}>
          ADD TODO
        </button>
        <br />    
         <Link to="/">Back to initial starting point !!</Link>
      </div>
      <br />
    </>
  );
}

export default Home;
