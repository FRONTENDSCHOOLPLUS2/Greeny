'use client';
import Image from 'next/image';
import styles from './MyPlantDiaryAdd.module.scss';
import PlantImg1 from '@images/PlantImg1.png';
import Link from 'next/link';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

export default function MyPlantDiaryAdd() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  return (
    <div className={styles.diaryAdd_wrapper}>
      <form>
        <h2>식물 일지 등록</h2>
        <div className={styles.file_container}>
          <div className={styles.file_head}>
            <h3>식물 이미지</h3>
            <p>사진 3개 선택</p>
          </div>
          <div className={styles.file_box}>
            <label htmlFor="image" className={styles.photoAdd}>
              <input type="file" id="image" />
            </label>
            <ul>
              <li>
                <Image src={PlantImg1} alt="선택된 식물 사진" width={0} height={0} />
              </li>
              <li>
                <Image src={PlantImg1} alt="선택된 식물 사진" width={0} height={0} />
              </li>
              <li>
                <Image src={PlantImg1} alt="선택된 식물 사진" width={0} height={0} />
              </li>
            </ul>
          </div>
          <p>업로드 가능한 사진의 최대 개수는 5장입니다 </p>
        </div>
        <div className={styles.input_container}>
          <label htmlFor="date">
            식물 상태<span>*</span>
          </label>

          <div className={styles.selectBox}>
            <select name="fruits" className={styles.select}>
              <option value="좋음">좋음</option>
              <option value="새싹">새싹</option>
              <option value="개화">개화</option>
              <option value="아픔">아픔</option>
              <option value="죽음">죽음</option>
            </select>
          </div>
          <p>식물 상태를 선택해주세요.</p>
        </div>
        <div className={styles.input_container}>
          <label htmlFor="date">
            반려식물을 위한 활동<span>*</span>
          </label>

          <div className={styles.selectBox}>
            <select name="fruits" className={styles.select}>
              <option value="16~20℃">물주기</option>
              <option value="21~25℃">햇빛</option>
              <option value="21~25℃">분갈이</option>
              <option value="21~25℃">영양</option>
              <option value="21~25℃">가지</option>
              <option value="21~25℃">관찰</option>
            </select>
          </div>
          <p>온도를 선택해주세요.</p>
        </div>
        <div className={styles.input_container}>
          <label htmlFor="date">
            활동 날짜<span>*</span>
          </label>

          <DatePicker
            className={styles.datePicker}
            dateFormat="yyyy.MM.dd" // 날짜 형태
            shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
          <p>활동 날짜를 선택해주세요.</p>
        </div>

        <div className={styles.input_container}>
          <label htmlFor="name">일기</label>
          <textarea id="name" placeholder="물주기를 선택해주세요." />
          <p>2글자 이상 입력해주세요.</p>
        </div>
        <button type="submit" className={styles.button}>
          일기 등록
        </button>
      </form>
    </div>
  );
}
