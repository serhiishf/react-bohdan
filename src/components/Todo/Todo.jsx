import styles from './Todo.module.css';
import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import {FaCheck} from "react-icons/fa";

function Todo(props) {
  const { todo, deleteTodo, toggleTodo } = props;

  return (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo: ''}`}>
      <div >
        <RiTodoFill className={styles.todoIcon} />
      </div>
      <div className={styles.text}>{todo.text}</div>
      <div className={styles.iconsBlock}>
        <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => { deleteTodo(todo.id) }}/>
        <FaCheck className={styles.checkIcon} onClick={() => toggleTodo(todo.id)}/>
      </div>
    </div>
  );
}

export default Todo;
