'use client';
import Image from 'next/image';
import styles from './MyPlantDiary.module.scss';
import plant from '@images/PlantImg1.png';
import { useState } from 'react';
import PlantInfo from './PlantInfo';
import PlantDiray from './PlantDiary';

export default function MyPlantDiary() {
  const [tabMenun, setTabMenu] = useState(false);
  const handleTab = (tabClick: string) => {
    if (tabClick === 'info') {
      return setTabMenu(true);
    } else if (tabClick === 'diary') {
      return setTabMenu(false);
    }
  };
  return (
    <div className={styles.plantDetail_wrapper}>
      <div className={styles.plant_photo}>
        <Image src={plant} alt="식물사진" width={360} />
      </div>

      <div className={styles.plant_name}>
        <h2>머니머니</h2>
        <span>Australian laurel</span>
        <p className={styles.plant_with}>`머니머니`와 함께한지 20일째에요!</p>
      </div>

      <div className={styles.plant_tabMenu}>
        <button className={`${styles.plant_info} ${tabMenun ? styles.is_active : ''}`} onClick={() => handleTab('info')}>
          <span className="hidden">정보</span>
        </button>
        <button className={`${styles.plant_diary} ${!tabMenun ? styles.is_active : ''}`} onClick={() => handleTab('diary')}>
          <span className="hidden">일기</span>
        </button>
      </div>
      {tabMenun ? <PlantInfo /> : <PlantDiray />}
    </div>
  );
}
