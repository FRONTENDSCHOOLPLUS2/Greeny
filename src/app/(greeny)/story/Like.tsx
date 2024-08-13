import styles from './Community.module.scss';
import Image from 'next/image';

type Props = {
  number: number;
};

export default function Like({ number }: Props) {
  return (
    <div className={styles.icon_container}>
      <button type="button">
        <Image src="/images/LikeIcon.svg" width={18} height={18} alt="좋아요" className={styles.icon} style={{ cursor: 'pointer', verticalAlign: 'top' }} />
      </button>
      <span className={styles.number} style={{ fontSize: 12 }}>
        {number}
      </span>
    </div>
  );
}
