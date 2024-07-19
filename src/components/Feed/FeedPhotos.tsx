import { Photo } from "@/actions/photosGet";
import Image from "next/image";
import Link from "next/link";
import styles from "./Feed.module.css"

export default function FeedPhotos({ photos }: { photos: Photo[] }) {
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {photos && photos.map((photo, i) => (
        <li key={photo.id + i} className={styles.photo}>
          <Link href={`/foto/${photo.id}`} scroll={false}>
            <Image
              src={photo.src}
              width={1500}
              height={1500}
              alt={photo.title}
              sizes="80vw"
            />
            <span className={styles.visualizacao}>{photo.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}