import { formatAgo } from '@/utils/date';
import styles from './Community.module.scss';
import Like from '@greeny/story/Like';

export default function PostInfo({ createdAt, views }: { createdAt: string; views: number }) {
  return (
    <div className={styles.post_info}>
      <Like number={10} />
      <div className={styles.time_and_views}>
        <div>{formatAgo(createdAt)}</div>
        <div>조회수 {views}</div>
      </div>
    </div>
  );
}
