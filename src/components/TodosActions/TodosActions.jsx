import styles from './TodosActions.module.css';
import Button from '../ui/Button/Button';
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';

function TodosActions(props) {
  const { resetTodos, deleteCompleted, completedTodoExist } = props;
  return (
    <div className={styles.actionForm}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button title="Clear Completed Todos" onClick={deleteCompleted} disabled={!completedTodoExist}>
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
