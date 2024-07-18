import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <Image
          src={"/assets/dogs-footer.svg"}
          alt="Dogs"
          width={28}
          height={22}
        />
        <p>Dogs. Alguns direitos reservados.</p>
      </div>
    </footer>
  );
}
