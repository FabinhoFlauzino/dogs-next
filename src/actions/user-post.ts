"use server"

import { USER_POST } from "@/functions/api"
import apiError from "@/functions/api-error"
import login from "./login"

export default async function userPost(state: {}, formData: FormData) {
  const username = formData.get('username') as string | null
  const email = formData.get('email') as string | null
  const password = formData.get('password') as string | null

  try {
    if (!username || !password || !email) throw new Error("Preencha os dados.")

    if (username.trim().length < 3) throw new Error("O nome deve ter pelo menos 3 caracteres.")
    if (password.length < 6) throw new Error("Senha deve ter mais de 6 digitos")

    const { url } = USER_POST()

    const response = await fetch(url, {
      method: 'POST',
      body: formData
    })

    if (!response.ok) throw new Error("Email ou usuário já cadastrado.")

    const { ok } = await login({
      ok: true,
      error: ''
    }, formData)

    if (!response.ok) throw new Error("Erro ao entrar.")

    return {
      data: null,
      ok: true,
      error: ""
    }
  } catch (error: unknown) {
    return apiError(error)
  }
}