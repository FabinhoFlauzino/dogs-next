import LoginPerdeuForm from "@/components/login/login-perdeu-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Perdeu a senha | Dogs",
  description: "Recupere a sua senha."
}

export default async function PerdeuPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Perdeu as senha?</h1>
      <LoginPerdeuForm />
    </div>
  )
}