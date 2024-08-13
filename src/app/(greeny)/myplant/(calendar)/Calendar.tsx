'use client';
import { useCallback, useMemo, useState } from 'react';
import styles from './Calendar.module.scss';
import prev from '@images/PrevIcon.svg';
import next from '@images/NextIcon.svg';
import { addDays, addMonths, differenceInCalendarDays, endOfMonth, endOfWeek, format, isSameMonth, startOfMonth, startOfWeek, subMonths } from 'date-fns';
import Image from 'next/image';

export default function Calenadar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  const createMonth = useMemo(() => {
    const monthArray = [];
    let day = startDate;
    while (differenceInCalendarDays(endDate, day) >= 0) {
      monthArray.push(day);
      day = addDays(day, 1);
    }
    return monthArray;
  }, [startDate, endDate]);

  const days = createMonth.map((item, i) => {
    const isCurrentMonth = isSameMonth(item, currentDate);
    const today = format(new Date(), 'yyyyMMdd') === format(item, 'yyyyMMdd');

    return isCurrentMonth ? (
      today ? (
        <button className={`${styles.dayItem} ${styles.today}`} key={i}>
          <p>{format(item, 'd')}</p>
        </button>
      ) : (
        <button className={styles.dayItem} key={i}>
          <p>{format(item, 'd')}</p>
        </button>
      )
    ) : (
      <button className={styles.dayItem} key={i}>
        <p></p>
      </button>
    );
  });

  const weeks = week.map((item, i) => (
    <div key={i} className={styles.weekItem}>
      {item}
    </div>
  ));

  const handlePrevMonth = useCallback(() => {
    setCurrentDate(addMonths(currentDate, 1));
  }, [currentDate]);
  const handleNextMonth = useCallback(() => {
    setCurrentDate(subMonths(currentDate, 1));
  }, [currentDate]);

  return (
    <div className={styles.calendar_wrapper}>
      <div className={styles.calendar_head}>
        <div className={styles.calendar_tit}>
          <p className={styles.year}>{format(currentDate, 'yyyy년')}</p>
          <p className={styles.month}>{format(currentDate, 'M월')}</p>
        </div>
        <button className={styles.prevButton} onClick={handlePrevMonth}>
          <Image src={prev} alt="이전달" width={16} height={16} />
        </button>
        <button className={styles.nextButton} onClick={handleNextMonth}>
          <Image src={next} alt="다음달" width={16} height={16} />
        </button>
      </div>
      <div className={styles.calendar_week}>{weeks}</div>
      <div className={styles.calendar_day}>{days}</div>
    </div>
  );
}
