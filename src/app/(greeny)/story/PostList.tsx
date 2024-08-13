'use client';

import styles from './Community.module.scss';
import PostItem from '@greeny/story/PostItem';
import { CoreErrorRes, MultiItem } from '@/types/response';
import { PostRes } from '@/types/post';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function PostList() {
  const [data, setData] = useState<MultiItem<PostRes> | CoreErrorRes>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    (async function fetchPosts() {
      const url = 'https://api.fesp.shop/posts' + (category ? `?custom={"extra":{"category":"${category}"}}` : '');

      try {
        const res = await fetch(url, { headers: { 'client-id': '03-Greeny' }, signal });
        setData(await res.json());
      } catch (e) {
        if (e instanceof Error) {
          if (e.name === 'AbortError') {
            console.log('이전 요청 취소됨');
            return;
          }
          // TODO: error UI 만들기(ex. 재시도 UI)
          alert('네트워크 에러. 잠시 후 다시 시도해 주세요.');
        }
      } finally {
        setIsLoading(false);
      }
    })();

    return () => controller.abort();
  }, [category]);

  if (isLoading) return <p>loading...</p>;

  return <ul className={styles.ul}>{data?.ok && data.item.map((item) => <PostItem key={item._id} item={item} />)}</ul>;
}
