import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  };

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };

  return (
    <div className="App">
      <h1 className="title">Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler}/>
    </div>
  );
}

export default App;
