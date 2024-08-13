import styles from '@greeny/story/Community.module.scss';
import Image from 'next/image';
import UserProfile from '@components/UserProfile';
import ReplyModify from '@greeny/story/community/ReplyModify';
import { PostComment } from '@/types/post';
import { formatAgo } from '@/utils/date';
import SubMenu from '@greeny/story/community/SubMenu';

export default function ReplyItem({ reply }: { reply: PostComment }) {
  return (
    <li>
      {/* 다른 사용자 댓글일 때 */}
      {/* <UserProfile
        component={
          <div style={{ display: 'flex', marginLeft: 'auto', alignItems: 'center' }}>
            <div style={{ color: 'var(--color-gray-10)', fontSize: 10, marginRight: 10 }}>5분 전</div>
          </div>
        }
      /> */}
      {/* 내 댓글일 때 */}
      <UserProfile
        user={reply.user}
        fontStyle="sm_regular"
        component={
          <div style={{ display: 'flex', marginLeft: 'auto', alignItems: 'center' }}>
            <div style={{ color: 'var(--color-gray-10)', fontSize: 10 }}>{formatAgo(reply.createdAt)}</div>
            <div style={{ marginLeft: '0.6rem' }}>
              <SubMenu />
            </div>
          </div>
        }
      />

      <div className={styles.reply_item_content_container}>
        <pre className={styles.reply_item_content}>{reply.content}</pre>
        {/* <ReplyModify /> */}
      </div>
    </li>
  );
}
