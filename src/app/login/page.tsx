import LoginForm from "@/components/Login/LoginForm";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Login | Dogs',
  description: 'Entre na sua conta'
}

export default async function LoginPage() {
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <LoginForm />
    </section>
  )
}