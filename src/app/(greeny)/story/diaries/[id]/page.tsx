import diaryDetail from './DiaryDetail.module.scss';
import UserProfile from '@components/UserProfile';
import Like from '@greeny/story/Like';

export default function DiaryDetail() {
  return (
    <>
      <div className={diaryDetail.info}>
        <UserProfile
          fontStyle="md_semibold"
          component={
            <>
              <p style={{ color: 'var(--color-gray-10)', fontSize: 12, fontWeight: 'var(--font-regular)', marginLeft: 6 }}>12시간 전</p>
              <div style={{ marginLeft: 'auto' }}>
                <Like number={10} />
              </div>
            </>
          }
        />
      </div>
      {/* 구분선 */}
      <article>
        {/* swiper */}
        <div className={diaryDetail.image} style={{ height: 312, backgroundColor: '#DDD' }}></div>
        <div className={diaryDetail.text}>
          <div className={diaryDetail.plant_info}>
            <div>식물 상태: 좋음</div>
            <div>반려 식물을 위한 활동: 물 주기</div>
            <div>활동 날짜: 2024-07-31</div>
          </div>
          {/* 구분선 */}
          <div></div>
          <p className={diaryDetail.description}>오늘 베리베리가 너무 시들시들 해서 영양제를 줬다.. 시들지 않고 오래가자 베리야</p>
        </div>
      </article>
    </>
  );
}
