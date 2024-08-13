'use client';

import styles from './Community.module.scss';
import PostItem from '@greeny/story/PostItem';
import { CoreErrorRes, MultiItem } from '@/types/response';
import { PostRes } from '@/types/post';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

async function getPosts(category: string | null) {
  const url = 'https://api.fesp.shop/posts' + (category ? `?custom={"extra":{"category":"${category}"}}` : '');

  try {
    const res = await fetch(url, { headers: { 'client-id': '03-Greeny' } });
    const data = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        return console.log('이전 요청이 취소되었습니다.');
      }
      alert('네트워크 에러. 잠시 후 다시 시도해주세요.');
    }
  }
}

export default function PostList() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const { data, isLoading } = useQuery<MultiItem<PostRes> | CoreErrorRes>({
    queryKey: ['post', category],
    queryFn: () => getPosts(category),
  });

  if (isLoading) return <p>loading...</p>;

  return <ul className={styles.ul}>{data?.ok && data.item.map((item) => <PostItem key={item._id} item={item} />)}</ul>;
}
