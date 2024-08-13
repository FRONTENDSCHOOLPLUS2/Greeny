import styles from '@greeny/story/Community.module.scss';
import Image from 'next/image';

export default function ReplyInput() {
  return (
    <form className={styles.reply_form}>
      <input type="text" placeholder="댓글을 입력해주세요." />
      <button className={styles.btn_submit} type="submit">
        <Image src="/images/CommentAddIcon.svg" width={18} height={18} alt="send" />
      </button>
    </form>
  );
}
