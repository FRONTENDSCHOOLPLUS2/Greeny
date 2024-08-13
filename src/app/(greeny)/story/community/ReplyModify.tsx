import styles from '@greeny/story/Community.module.scss';

export default function ReplyModify() {
  return (
    <form className={styles.reply_modify_form}>
      <input type="text" value="괜찮을 것 같아요." />
      <div className={styles.btn_container}>
        <button className={styles.btn_cancel} type="submit">
          취소
        </button>
        <button type="submit" className={styles.btn_modify}>
          수정
        </button>
      </div>
    </form>
  );
}
