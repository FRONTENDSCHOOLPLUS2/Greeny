import Image from 'next/image';
import styles from './Follower.module.scss';
import NormalProfile from '@images/NormalProfile.svg';

export default function Follower() {
  return (
    <div className={styles.main_wrapper}>
      {/* TODO: 검색 컴포넌트 사용 */}
      <form className={styles.main_search}>
        <input type="search" name="search" id="search" placeholder="식물명, 질문을 검색해주세요" />
        <button>돋보기</button>
      </form>

      <ul className={styles.follow_list}>
        <User />
        <User />
        <User />
      </ul>
    </div>
  );
}
function User() {
  return (
    <li className={styles.item_wrapper}>
      <div className={styles.user_info_wrapper}>
        <div className={styles.thumbnail_wrapper}>
          <Image src={NormalProfile} alt="썸네일" />
          <div className={styles.user_data}>
            <p>네오</p>
            <span>u1@market.com</span>
          </div>
        </div>

        <button type="button" className={styles.button_fill} />
      </div>
    </li>
  );
}
