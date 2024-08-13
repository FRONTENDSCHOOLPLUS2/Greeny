'use client';
import styles from './MyPlantNew.module.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

export default function MyPlantNew() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  return (
    <div className={styles.plantNew_wrapper}>
      <form>
        <h2>나의 식물 등록</h2>

        <div className={styles.file_container}>
          <h3>
            식물 이미지<span>*</span>
          </h3>
          <label htmlFor="image" className={styles.photoAdd}>
            <input type="file" id="image" />
          </label>
        </div>

        <div className={styles.input_container}>
          <label htmlFor="name">
            식물명<span>*</span>
          </label>
          <input type="text" id="name" placeholder="식물 이름을 입력하세요." />
          <p>2글자 이상 입력해주세요.</p>
        </div>

        <div className={styles.input_container}>
          <label htmlFor="content">
            식물 애칭<span>*</span>
          </label>
          <input type="text" id="content" placeholder="식물 애칭을 입력하세요." />
          <p>2글자 이상 입력해주세요.</p>
        </div>

        <div className={styles.input_container}>
          <label htmlFor="date">
            식물 입양일<span>*</span>
          </label>

          <DatePicker
            className={styles.datePicker}
            dateFormat="yyyy.MM.dd" // 날짜 형태
            shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
          <p>입양 날짜를 선택해주세요.</p>
        </div>

        <div className={styles.input_container}>
          <label htmlFor="date">
            일조량<span>*</span>
          </label>

          <div className={styles.selectBox}>
            <select name="fruits" className={styles.select}>
              <option value="낮은광도">낮은 광도(300~800 Lux)</option>
              <option value="중간광도">중간 광도(800~1,500 Lux)</option>
              <option value="높은광도">높은 광도(1,500~10,000 Lux)</option>
            </select>
          </div>
          <p>일조량을 선택해주세요.</p>
        </div>

        <div className={styles.input_container}>
          <label htmlFor="date">
            온도<span>*</span>
          </label>

          <div className={styles.selectBox}>
            <select name="fruits" className={styles.select}>
              <option value="16~20℃">16~20℃</option>
              <option value="21~25℃">21~25℃</option>
            </select>
          </div>
          <p>온도를 선택해주세요.</p>
        </div>

        <div className={styles.input_container}>
          <label htmlFor="name">
            물주기<span>*</span>
          </label>
          <div className={styles.sub_container}>
            <input type="number" id="name" placeholder="물주기를 선택해주세요." />
            <span>일에 한번씩</span>
          </div>
          <p>물주기를 입력해주세요.</p>
        </div>

        <div className={styles.input_container}>
          <label htmlFor="name">특징</label>
          <textarea id="name" placeholder="물주기를 선택해주세요." />
          <p>2글자 이상 입력해주세요.</p>
        </div>

        <button type="submit" className={styles.button}>
          식물 등록
        </button>
      </form>
    </div>
  );
}
