import styles from './Community.module.scss';
import Image from 'next/image';

export default function Search() {
  return (
    <form className={styles.search_form}>
      <div>
        <input type="text" placeholder="식물명, 질문을 입력해주세요." />
        {/* 입력값 있을 시 버튼 렌더링 */}
        {/* <button type="reset" className={styles.btn_reset}>
          <Image src="/images/InputResetIcon.svg" width={13} height={13} alt="search" />
        </button> */}
      </div>
      <button type="submit" className={styles.btn_submit}>
        <Image src="/images/SearchIcon.svg" width={18} height={18} alt="search" />
      </button>
    </form>
  );
}
