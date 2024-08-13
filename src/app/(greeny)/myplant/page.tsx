import Image from 'next/image';
import styles from './MyPlant.module.scss';
import PlantImg1 from '@images/PlantImg1.png';
import Link from 'next/link';

export default async function MyPlant() {
  return (
    <div className={styles.plant_wrapper}>
      <div className={styles.contents_head}>
        <h2>My Plant</h2>

        <div className={styles.btn_box}>
          <Link href="/myplant/delete" className={styles.button_line}>
            <span className="hidden">삭제</span>
          </Link>
          <Link href="/myplant/new" className={styles.button_fill}>
            <span className="hidden">추가</span>
          </Link>
        </div>
      </div>

      <div className={styles.contents_main}>
        <Link href="/myplant/diary" className={styles.contents_item}>
          <div className={styles.item_cover}>
            <Image src={PlantImg1} alt="식물 사진" />
          </div>

          <div className={styles.item_info}>
            <h3>식물 닉네임</h3>
            <p>식물 실제이름</p>

            <span>20일째</span>
          </div>
        </Link>
        <Link href="/myplant/diary" className={styles.contents_item}>
          <div className={styles.item_cover}>
            <Image src={PlantImg1} alt="식물 사진" />
          </div>

          <div className={styles.item_info}>
            <h3>식물 닉네임</h3>
            <p>식물 실제이름</p>

            <span>20일째</span>
          </div>
        </Link>
        <Link href="/myplant/diary" className={styles.contents_item}>
          <div className={styles.item_cover}>
            <Image src={PlantImg1} alt="식물 사진" />
          </div>

          <div className={styles.item_info}>
            <h3>식물 닉네임</h3>
            <p>식물 실제이름</p>

            <span>20일째</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
