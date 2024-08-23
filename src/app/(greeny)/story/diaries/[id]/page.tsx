import diaryDetailStyles from '@greeny/story/diaries/[id]/DiaryDetail.module.scss';
import { fetchDiary, getPlantBookmarkId } from '@/app/api/fetch/postFetch';
import UserProfile from '@components/UserProfile';
import Like from '@greeny/story/Like';
import { formatAgo } from '@/utils/date';
import DiaryImageSlider from '@greeny/story/diaries/[id]/DiaryImageSlider';
import { auth } from '@/auth';
import DiarySubMenu from '@greeny/story/diaries/[id]/DiarySubMenu';
import FollowBtn from './FollowBtn';
import Link from 'next/link';
import Image from 'next/image';
import { DiaryRes } from '@/types/post';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default async function DiaryDetail({ params: { id } }: { params: { id: string } }) {
  const diary: DiaryRes = await fetchDiary(id);
  const plant = diary.product;

  const session = await auth();
  const isWriter = Number(session?.user?.id) === diary.user._id;
  const bookmarkId = await getPlantBookmarkId(diary.product_id.toString());

  return (
    <>
      <div className={diaryDetailStyles.user_info}>
        <UserProfile
          user={diary.user}
          fontStyle="md_semibold"
          component={
            <>
              <p style={{ color: 'var(--color-gray-10)', fontSize: 12, fontWeight: 'var(--font-regular)', marginLeft: 6 }}>{formatAgo(diary.createdAt)}</p>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.7rem', alignItems: 'center' }}>
                <Like number={diary.bookmarks} targetId={id} bookmarkId={diary.myBookmarkId} content={diary.content} />
                {isWriter && <DiarySubMenu />}
              </div>
            </>
          }
        />
      </div>
      <article className={diaryDetailStyles.article}>
        <h2>
          <span className={diaryDetailStyles.heading}>제목: </span>
          {diary.title}
        </h2>
        <DiaryImageSlider images={diary.image} />

        <pre className={diaryDetailStyles.description}>{diary.content}</pre>

        <div className={diaryDetailStyles.plant_card}>
          <div className={diaryDetailStyles.plant_profile}>
            <Link href={`/myplant/${diary.product_id}`}>
              <div className={diaryDetailStyles.plant_image_container}>
                <Image src={`${SERVER}/${plant.mainImages[0][0].path}`} alt={plant.name} fill sizes="100%" />
              </div>
              <div className={diaryDetailStyles.plant_nickname}>{diary.product.name}</div>
            </Link>
            <FollowBtn plantId={diary.product_id} bookmarkId={bookmarkId} />
          </div>
          <div className={diaryDetailStyles.plant_diary_info}>
            <div>
              <span className={diaryDetailStyles.heading}>식물 상태: </span>
              {diary.extra.plantState}
            </div>
            <div>
              <span className={diaryDetailStyles.heading}>반려 식물을 위한 활동: </span>
              {diary.extra.action}
            </div>
            <div>
              <span className={diaryDetailStyles.heading}>활동 날짜: </span>
              {diary.extra.actionDate}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
