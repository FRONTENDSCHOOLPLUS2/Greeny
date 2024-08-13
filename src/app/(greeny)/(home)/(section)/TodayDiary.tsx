'use client';
import styles from '../Home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { DiaryRes } from '@/types/post';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default function TodayDiary({ data }: { data: DiaryRes[] }) {
  const diaryList = data.map((res, i) => {
    return (
      <SwiperSlide className={styles.swiper_item} key={i}>
        <div className={styles.swiper_cover}>{res.image?.length > 0 ? <Image src={`${SERVER}${res.image[0].path}`} alt="식물 사진" fill sizes="100%" /> : ''}</div>
        <p>{res.title}</p>
      </SwiperSlide>
    );
  });

  return (
    <Swiper className={styles.swiperList} slidesPerView={1.5} spaceBetween={10}>
      {diaryList}
    </Swiper>
  );
}
