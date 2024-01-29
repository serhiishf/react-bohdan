import { useState } from 'react';
import Button from '../ui/Button/Button';
import styles from './TodoForm.module.css';
import Todo from '../Todo/Todo';

function TodoForm(props) {
  const [text, setText] = useState('');

  const { addTodo } = props;
  const handleClick = () => {};

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (text) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form className={styles.todoForm} onSubmit={onSubmitHandler}>
      <input value={text} onChange={(e) => setText(e.target.value)} className={styles.input} type="text" placeholder="Enter new todo" />
      <Button onClick={handleClick} type="submit" title="Submit">
        Submit
      </Button>
    </form>
  );
}

export default TodoForm;
