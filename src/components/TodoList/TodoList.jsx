import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

function TodoList(props) {
  const { todos } = props;

  return (
    <div className={styles.todoList}>
      {todos.map((todo, index) => (
        <Todo todoText={todo} key={index} />
      ))}
    </div>
  );
}

export default TodoList;
