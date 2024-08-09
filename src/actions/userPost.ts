'use server'

import { USER_POST } from "@/function/api"
import ApiError from "@/function/api-error"
import Login from "./login"

export default async function UserPost(state: {}, formData: FormData) {
  const username = formData.get('username') as string | null
  const email = formData.get('email') as string | null
  const password = formData.get('password') as string | null

  try {
    if (!username || !password || !email) throw new Error('Preencha os dados.')
    
    if(password.length < 6) throw new Error('A senha deve conter 6 ou mais caractéres')

    const { url } = USER_POST()
    const response = await fetch(url, {
      method: 'POST',
      body: formData
    })

    if (!response.ok) throw new Error('Email ou usuário já cadastrado')

    const data = await response.json()
    const { ok } = await Login({ ok: true, error: '' }, formData)

    if (!ok) throw new Error('Erro ao entrar.')

    return {
      data: '',
      ok: true,
      error: ''
    }
  } catch (error: unknown) {
    return ApiError(error)
  }
}