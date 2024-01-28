import styles from './Todo.module.css';
import { RiTodoFill } from "react-icons/ri";

function Todo(props) {
  const { todoText, deleteTodo, index } = props;

  return (
    <div onDoubleClick={() => { deleteTodo(index) }} className={styles.todo}>
      <div >
        <RiTodoFill className={styles.icon} />
      </div>
      <div className={styles.text}>{todoText}</div>
    </div>
  );
}

export default Todo;
