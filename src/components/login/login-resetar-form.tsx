"use client"

import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "../helper/error-message";
import { useEffect, useState } from "react";
import styles from "@/components/login/login-form.module.css"
import passwordReset from "@/actions/passorwd-reset";

function FormButton() {
  const { pending } = useFormStatus()

  return (
    <>
      {pending && (
        <Button disabled={pending}>Resetando...</Button>
      )}

      {!pending && (
        <Button>Resetar senha</Button>
      )}
    </>
  )

}

export default function LoginResetarSenha({
  keyToken,
  login
} : {
  keyToken: string
  login: string
}) {
  const [url, setUrl] = useState('')
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: '',
    data: null
  })

  useEffect(() => {
    setUrl(
      window.location.href.replace('perdeu', 'resetar')
    )
  }, [])

  return (
    <form action={action} className={styles.form}>
      <Input label="Nova senha" name="password" type="password" />
      <input type="hidden" name="login" value={login} />
      <input type="hidden" name="key" value={keyToken} />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  )
}