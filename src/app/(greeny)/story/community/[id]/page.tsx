'use client';

import styles from '@greeny/story/Community.module.scss';
import postStyles from '@greeny/story/community/Post.module.scss';
// import Image from 'next/image';
import UserProfile from '@components/UserProfile';
import PostInfo from '@greeny/story/PostInfo';
import ReplyList from '@greeny/story/community/ReplyList';
import ReplyInput from '@greeny/story/community/ReplyInput';
import { PostRes } from '@/types/post';
// import SubMenu from '../SubMenu';
import { useQuery } from '@tanstack/react-query';
import { CoreErrorRes, SingleItem } from '@/types/response';
// import ImageSlider from '@greeny/story/ImageSlider';

async function getPost(id: string): Promise<SingleItem<PostRes> | CoreErrorRes> {
  const url = `https://api.fesp.shop/posts/${id}`;

  const res = await fetch(url, { headers: { 'client-id': '03-Greeny' } });
  return await res.json();
}

export default function PostDetail({ params: { id } }: { params: { id: string } }) {
  const { data, isLoading } = useQuery({
    queryKey: ['post-detail', id],
    queryFn: () => getPost(id),
    staleTime: 1000 * 60,
  });

  if (isLoading) return <p>로딩중...</p>;

  return (
    data?.ok === 1 && (
      <article className={postStyles.detail_container}>
        <section className={postStyles.content}>
          <h1 className={postStyles.title}>{data.item.title}</h1>
          {/* 다른 사용자 게시글일 때*/}
          <div className={postStyles.info}>
            <UserProfile user={data.item.user} fontStyle="sm_medium" />
            {/* 내 게시글일 때 */}
            {/* <UserProfile
                user={data.item.user}
                fontStyle="sm_medium"
                component={
                  <div style={{ marginLeft: 'auto' }}>
                    <SubMenu />
                  </div>
                }
              /> */}
          </div>
          <pre>{data.item.content}</pre>
          {/* 사진 */}
          {/* <ImageSlider /> */}
          <PostInfo createdAt={data.item.createdAt} views={data.item.views} />
        </section>
        <section className={styles.reply}>
          <ReplyList postId={id} />
          <ReplyInput />
        </section>
      </article>
    )
  );
}
