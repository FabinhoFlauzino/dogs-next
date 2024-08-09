'use client'
import styles from "@/components/Login/LoginForm/LoginForm.module.css"
import Button from "@/components/Forms/Button";
import Input from "@/components/Forms/Input";
import ErrorMessage from "@/components/Helper/ErrorMessage";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import UserPost from "@/actions/userPost";

function FormButton() {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Cadastrando...</Button>
      ) : (
        <Button>Cadastrar</Button>
      )}
    </>
  )
}

export default function LoginCriarForm() {
  const [state, action] = useFormState(UserPost, {
    ok: false,
    error: '',
    data: null
  })

  useEffect(() => {
    if (state.ok) {
      window.location.href = '/conta'
    }
  }, [state.ok])

  return (
    <form action={action} className={styles.form}>
      <Input label="Usuário" name="username" />
      <Input label="Email" name="email" type="email" />
      <Input label="Senha" name="password" type="password" />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  )
}