import Link from "next/link";
import styles from "./Header.module.css"
import Image from "next/image";

export default function Header() {
  const user = false

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href={'/'}>
          <Image
            src={"/assets/dogs.svg"}
            alt="Logo"
            width={28}
            height={22}
            priority
          />
        </Link>
        {user ? (
          <Link className={styles.login} href={'/conta'}>Fulano</Link>
        ) : (
          <Link className={styles.login} href={'/login'}>Login / Criar</Link>
        )}

      </nav>
    </header>
  )
}