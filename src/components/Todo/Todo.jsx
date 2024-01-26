import styles from './Todo.module.css';

function Todo(props) {
  const { todoText, deleteTodo } = props;

  return (
    <div onDoubleClick={deleteTodo} className={styles.todo}>
      <div className={styles.icon}></div>
      <div className={styles.text}>{todoText}</div>
    </div>
  );
}

export default Todo;
