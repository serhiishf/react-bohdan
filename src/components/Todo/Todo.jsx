import styles from './Todo.module.css';
 
function Todo(props) {
  const { todoText } = props;

  return (
    <div className={styles.todo}>
      <div className={styles.icon}></div>
      <div className={styles.text}>{todoText}</div>
    </div>
  );
}

export default Todo;
