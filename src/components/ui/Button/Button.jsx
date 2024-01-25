import styles from './Button.module.css';

function Button(props) {
  const { onClick, buttonName } = props;

  return (
    <button className={styles.button} onClick={onClick} type="submit">
      {buttonName}
    </button>
  );
}

export default Button;
