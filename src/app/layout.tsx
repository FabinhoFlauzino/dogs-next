import type { Metadata } from "next";
import "./globals.css";
import { type_second } from "@/functions/fonts"
import Header from "@/components/header";
import Footer from "@/components/footer";
import { UserContextProvider } from "@/context/userContext";
import userGet from "@/actions/user-get";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede Social para cachorros",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const {data: user} = await userGet()

  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        <UserContextProvider user={user}>
          <div className="App">
            <Header />
            <main className="AppBody">
              {children}
            </main>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
