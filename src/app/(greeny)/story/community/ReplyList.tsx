import styles from '@greeny/story/Community.module.scss';
import ReplyItem from '@greeny/story/community/ReplyItem';

export default function ReplyList() {
  return (
    <ul className={styles.reply_list}>
      <ReplyItem />
      <ReplyItem />
      <ReplyItem />
    </ul>
  );
}
