import photosGet from "@/actions/photos-get"
import userGet from "@/actions/user-get"
import Feed from "@/components/feed/feed"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Minha Conta",
}

export default async function ContaPage() {
  const {data: user} = await userGet()
  const { data } = await photosGet({user: user?.username})

  return (
    <main>
      {data?.length ? (
        <Feed  photos={data}/>
      ) : (
        <div className="container">
          <h1 className="title">Não há fotos</h1>
          <p className="text">Você ainda não possui fotos, que tal começar a compartilhar?</p>
          <Link href="/conta/postar" className="button" style={{display: 'inline-block'}}>
            Postar foto
          </Link>
        </div>
      )}
    </main>
  )
}
