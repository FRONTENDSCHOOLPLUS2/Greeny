import { PostComment } from '@/types/post';
import { CoreErrorRes, MultiItem } from '@/types/response';
import styles from '@greeny/story/Community.module.scss';
import ReplyItem from '@greeny/story/community/ReplyItem';
import { useQuery } from '@tanstack/react-query';

async function getReply(postId: string): Promise<MultiItem<PostComment> | CoreErrorRes> {
  const res = await fetch(`https://api.fesp.shop/posts/${postId}/replies`, {
    headers: { 'client-id': '03-Greeny' },
  });
  const resJson = await res.json();
  return resJson;
}

export default function ReplyList({ postId }: { postId: string }) {
  const { data } = useQuery({
    queryKey: ['reply', postId],
    queryFn: () => getReply(postId),
    staleTime: 1000 * 60,
  });

  return <ul className={styles.reply_list}>{data?.ok && data.item.map((reply) => <ReplyItem key={reply._id} reply={reply} />)}</ul>;
}
