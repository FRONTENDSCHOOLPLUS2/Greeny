import styles from './Home.module.scss';
import like from '@images/LikeIcon_nor.svg';
import comment from '@images/CommentIcon.svg';
import view from '@images/ViewIcon.svg';
import Image from 'next/image';
import Banner from './(section)/Banner';
import TodayPlant from './(section)/TodayPlant';
import TodayDiary from './(section)/TodayDiary';
import { fetchDiaries, fetchPosts } from '@/app/api/fetch/postFetch';
import Link from 'next/link';
import { formatAgo } from '@/utils/date';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default async function Home() {
  const dataPost = await fetchPosts();
  const dataDiary = await fetchDiaries();

  const list = dataPost.item.map((item) => {
    return (
      <li key={item._id}>
        <Link href={`/story/community/${item._id}`} className={styles.contents_item}>
          <div className={styles.contents_main}>
            <div className={styles.contents_info}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
            <div className={styles.contents_cover}>{item.image?.length > 0 ? <Image src={`${SERVER}${item.image[0].path}`} alt="식물 사진" sizes="100%" fill /> : ''}</div>
          </div>

          <div className={styles.contents_footer}>
            <div className={styles.reaction_list}>
              <div className={styles.reaction_item}>
                <Image src={like} alt="좋아요" width={16} />
                <p>0</p>
              </div>
              <div className={styles.reaction_item}>
                <Image src={comment} alt="댓글" width={16} />
                <p>{item.repliesCount}</p>
              </div>
              <div className={styles.reaction_item}>
                <Image src={view} alt="조회수" width={16} />
                <p>{item.views}</p>
              </div>
            </div>

            <p>{formatAgo(item.createdAt)}</p>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <div className={styles.home_wrapper}>
      <Banner />

      <div className={styles.main_list}>
        <div className={styles.list_item}>
          <h2 className={styles.list_title}>오늘의 식물 추천!</h2>
          <TodayPlant />
        </div>

        <div className={styles.list_item}>
          <h2 className={styles.list_title}>식집사들의 식물을 구경해봐요!</h2>
          <TodayDiary data={dataDiary} />
        </div>

        <div className={styles.list_item}>
          <h2 className={styles.list_title}>다른 식집사들의 이야기를 들어봐요!</h2>

          <ul className={styles.contentsList}>{list}</ul>
        </div>
      </div>
    </div>
  );
}
