import styles from './Community.module.scss';
import Link from 'next/link';

export default function NoResult() {
  return (
    <div className={styles.no_result_container}>
      <div className={styles.title}>아직 관련 글이 없어요.</div>
      <div className={styles.description}>내가 먼저 게시글을 올려봐요!</div>
      <Link href="#">
        <div className={styles.btn_write}>게시글 작성하기</div>
      </Link>
    </div>
  );
}
