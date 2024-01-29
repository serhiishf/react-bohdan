import styles from './Button.module.css';

function Button(props) {
  const { onClick, children, title, disabled = false } = props;
  return (
    <button {...props} onClick={onClick} title={title} disabled={disabled} className={`${styles.button} ${disabled && styles.buttonDisabled}`}>
      {children}
    </button>
  );
}

export default Button;
