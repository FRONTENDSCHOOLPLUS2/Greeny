import Link from 'next/link';
import styles from './MyPlantDiary.module.scss';
import Image from 'next/image';
import PlantImg1 from '@images/PlantImg1.png';
import PlantImg2 from '@images/PlantImg2.png';
import Calenadar from '../(calendar)/Calendar';

export default function PlantDiray() {
  return (
    <div className={styles.layout_wrapper}>
      <div className={styles.diary_head}>
        <h3>식물 일지</h3>
        <Link href="/myplant/diary/add" className={styles.diary_add}>
          <span className="hidden">식물 일지 추가</span>
        </Link>
      </div>

      <Calenadar />

      <ul className={styles.diary_list}>
        <li>
          <Link href="/myplant/diary/" className={styles.diary_item}>
            <div className={styles.item_head}>
              <div className={styles.item_info}>
                <span>식물 상태 :</span>
                <p>좋음</p>
              </div>
              <div className={styles.item_info}>
                <span>반려 식물을 위한 활동 :</span>
                <p>영양제</p>
              </div>
              <div className={styles.item_info}>
                <span>활동 날짜 :</span>
                <p>2024-07-31</p>
              </div>
            </div>

            <div className={styles.item_cover}>
              <Image src={PlantImg1} alt="식물 사진" width={0} height={0} />
            </div>
            <div className={styles.item_desc}>
              <pre>
                오늘 베리베리가 너무 시들시들 해서 영양제를 줬다.. <br />
                시들지 않고 오래가자 베리야!
              </pre>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/myplant/diary/" className={styles.diary_item}>
            <div className={styles.item_head}>
              <div className={styles.item_info}>
                <span>식물 상태 :</span>
                <p>좋음</p>
              </div>
              <div className={styles.item_info}>
                <span>반려 식물을 위한 활동 :</span>
                <p>물주기</p>
              </div>
              <div className={styles.item_info}>
                <span>활동 날짜 :</span>
                <p>2024-08-20</p>
              </div>
            </div>

            <div className={styles.item_cover}>
              <Image src={PlantImg2} alt="식물 사진" width={0} height={0} />
            </div>
            <div className={styles.item_desc}>
              <pre>
                오늘 베리베리가 꽃을 폈다! <br />
                너무 이쁘다~
              </pre>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
