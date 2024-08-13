import styles from './MyPlantDiary.module.scss';

export default function PlantInfo() {
  return (
    <div className={styles.layout_wrapper}>
      <div className={styles.plant_gardening}>
        <h3>가드닝 정보</h3>
        <ul>
          <li>
            <span>온도</span>
            <p>16~20℃</p>
          </li>
          <li>
            <span>물주기</span>
            <p>9일에 한번씩</p>
          </li>
          <li>
            <span>일조량</span>
            <p> 중간 광도(800~1,500 Lux)</p>
            <p></p>
          </li>
        </ul>
      </div>
      <div className={styles.plant_tips}>
        <h3>특징</h3>
        <pre>
          비료를 거의 요구하지않음 (1회/년, 봄) <br />
          복용시 치명적 독성 <br />
          그늘진 곳에서 잘 견디지만, 실내 밝은 간접광이 더 좋다.
        </pre>
      </div>
    </div>
  );
}
