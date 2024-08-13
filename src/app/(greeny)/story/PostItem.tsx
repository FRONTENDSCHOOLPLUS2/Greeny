import styles from './Community.module.scss';
import Image from 'next/image';
import IconAndNumber from '@greeny/story/IconAndNumber';
import Link from 'next/link';
import { PostRes } from '@/types/post';

type Props = {
  item: PostRes;
};

export default function PostItem({ item: { _id, title, content, views, repliesCount } }: Props) {
  return (
    <li>
      <article className={styles.post_item_container}>
        <Link href={`/story/community/${_id}`} className={styles.content}>
          <div className={styles.title} style={{ overflow: 'hidden' }}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{content}</p>
          </div>
          <div className={styles.thumbnail}>
            {/* 이미지 예시 */}
            <div style={{ width: 50, height: 50, backgroundColor: '#DDDDDD' }}></div>
            {/* {image && <Image src={image.path} width={50} height={50} alt={image.name} />} */}
          </div>
        </Link>
        <div className={styles.info}>
          <div className={styles.icons}>
            <IconAndNumber src="/images/LikeIcon.svg" alt="좋아요" number={10} />
            <IconAndNumber src="/images/CommentIcon.svg" alt="코멘트" number={repliesCount!} />
            <IconAndNumber src="/images/ViewIcon.svg" alt="조회수" number={views} />
          </div>
          <p>몇분 전</p>
        </div>
      </article>
    </li>
  );
}
