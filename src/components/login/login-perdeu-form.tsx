"use client"

import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "../helper/error-message";
import { useEffect, useState } from "react";
import styles from "@/components/login/login-form.module.css"
import passwordLost from "@/actions/password-lost";

function FormButton() {
  const { pending } = useFormStatus()

  return (
    <>
      {pending && (
        <Button disabled={pending}>Enviando...</Button>
      )}

      {!pending && (
        <Button>Enviar Email</Button>
      )}
    </>
  )

}

export default function LoginPerdeuForm() {
  const [url, setUrl] = useState('')
  const [state, action] = useFormState(passwordLost, {
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
      <Input label="Email / Usuário" name="login" type="text" />
      <input type="hidden" name="url" value={url} />
      <ErrorMessage error={state.error} />
      {state.ok ? (
        <p className="success">Email enviado.</p>
      ) : (
        <FormButton />
      )}
    </form>
  )
}