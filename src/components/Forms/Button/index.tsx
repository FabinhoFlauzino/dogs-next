import { ButtonHTMLAttributes } from "react"
import styles from "./Button.module.css"

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({children, ...props}: ButtonType) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  )
}