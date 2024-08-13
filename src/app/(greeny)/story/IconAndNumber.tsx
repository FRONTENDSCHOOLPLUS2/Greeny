import styles from './Community.module.scss';
import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  iconSize?: number;
  number: number;
  fontSize?: number;
};

export default function IconAndNumber({ src, alt, iconSize = 12, number, fontSize = 10 }: Props) {
  return (
    <div className={styles.icon_container}>
      <Image src={src} width={iconSize} height={iconSize} alt={alt} className={styles.icon} />
      <span className={styles.number} style={{ fontSize }}>
        {number}
      </span>
    </div>
  );
}
