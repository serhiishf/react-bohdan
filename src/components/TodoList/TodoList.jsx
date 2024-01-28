import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

function TodoList(props) {
  const { todos, deleteTodo } = props;

  return (
    <div className={styles.todoList}>
      {!todos.length && <h2>Todo List is empty</h2>}
      {todos.map((todo, index) => (
        <Todo todoText={todo} key={index} deleteTodo={deleteTodo} index={index} />
      ))}
    </div>
  );
}

export default TodoList;
