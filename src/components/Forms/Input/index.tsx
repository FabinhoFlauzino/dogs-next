import { ComponentProps } from "react"
import styles from "./Input.module.css"

type InputProps = ComponentProps<'input'> & {
  label: string
  error?: string
}

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={props.name} className={styles.label}>{label}</label>
      <input type="text" id={props.name} {...props} className={styles.input}/>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}