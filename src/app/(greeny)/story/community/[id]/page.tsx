'use client';

import styles from '@greeny/story/Community.module.scss';
import postStyles from '@greeny/story/community/Post.module.scss';
import Image from 'next/image';
import UserProfile from '@components/UserProfile';
import PostInfo from '@greeny/story/PostInfo';
import ReplyList from '@greeny/story/community/ReplyList';
import ReplyInput from '@greeny/story/community/ReplyInput';
import { useEffect, useState } from 'react';
import { PostRes } from '@/types/post';
import SubMenu from '../SubMenu';
// import ImageSlider from '@greeny/story/ImageSlider';

export default function PostDetail({ params: { id } }: { params: { id: string } }) {
  const [post, setPost] = useState<PostRes>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    (async function fetchPosts() {
      const url = `https://api.fesp.shop/posts/${id}`;

      try {
        const res = await fetch(url, { headers: { 'client-id': '03-Greeny' }, signal });
        const data = await res.json();
        setPost(data.item);
      } catch (e) {
        if (e instanceof Error) {
          if (e.name === 'AbortError') {
            return console.log('이전 요청 취소됨');
          }
          // TODO: error UI 만들기(ex. 재시도 UI)
          alert('네트워크 에러. 잠시 후 다시 시도해 주세요.');
        }
      } finally {
        setIsLoading(false);
      }
    })();

    return () => controller.abort();
  }, [id]);

  if (isLoading) return <p>로딩중...</p>;

  return (
    post && (
      <>
        <article className={postStyles.detail_container}>
          <section className={postStyles.content}>
            <h1 className={postStyles.title}>{post.title}</h1>
            {/* 다른 사용자 게시글일 때*/}
            <div className={postStyles.info}>
              <UserProfile user={post.user} fontStyle="sm_medium" />
              {/* 내 게시글일 때 */}
              {/* <UserProfile
                user={post.user}
                fontStyle="sm_medium"
                component={
                  <div style={{ marginLeft: 'auto' }}>
                    <SubMenu />
                  </div>
                }
              /> */}
            </div>
            <pre>{post.content}</pre>
            {/* 사진 */}
            {/* <ImageSlider /> */}
            <PostInfo createdAt={post.createdAt} views={post.views} />
          </section>
          <section className={styles.reply}>
            <ReplyList replies={post.replies} />
            <ReplyInput />
          </section>
        </article>
      </>
    )
  );
}
