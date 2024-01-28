import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

function TodoList(props) {
  const { todos, deleteTodo, toggleTodo } = props;

  return (
    <div className={styles.todoList}>
      {!todos.length && <h2>Todo List is empty</h2>}
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
      ))}
    </div>
  );
}

export default TodoList;
