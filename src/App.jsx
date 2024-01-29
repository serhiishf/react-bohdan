import { useState, useRef } from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodosActions from './components/TodosActions/TodosActions';

function App() {
  const [todos, setTodos] = useState([]);
  let idRef = useRef(1);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: idRef.current,
    };
    idRef.current += 1;
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo };
      })
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodoCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1 className="title">Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && <TodosActions resetTodos={resetTodosHandler} deleteCompleted={deleteCompletedHandler} completedTodoExist={!!completedTodoCount} />}
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler} />
      {completedTodoCount > 0 && <h2>{`You have completed ${completedTodoCount} ${completedTodoCount > 1 ? 'todos' : 'todo'}`}</h2>}
    </div>
  );
}

export default App;
