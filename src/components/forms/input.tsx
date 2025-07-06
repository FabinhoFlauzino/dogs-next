import { ComponentProps } from 'react';
import styles from './Input.module.css';

type InputProps = ComponentProps<'input'> & {
  label: string,
  error?: string
}

const Input = ({ label, name, error, ...rest}: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        {...rest}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
