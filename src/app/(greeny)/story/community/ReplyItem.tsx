import styles from '@greeny/story/Community.module.scss';
import Image from 'next/image';
import UserProfile from '@components/UserProfile';
import ReplyModify from '@greeny/story/community/ReplyModify';

export default function ReplyItem() {
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
        fontStyle="sm_regular"
        component={
          <div style={{ display: 'flex', marginLeft: 'auto', alignItems: 'center' }}>
            <div style={{ color: 'var(--color-gray-10)', fontSize: 10, marginRight: 10 }}>5분 전</div>
            <Image src="/images/SubMenuIcon.svg" width={14} height={14} alt="bookmark" />
          </div>
        }
      />

      <div className={styles.reply_item_content_container}>
        <div className={styles.reply_item_content}>
          음..일단 반음지 식물은 건너편으로 옮기구요,그리고 반양지 식물을 가운데로 옮기는 게 좋을 것 같아요. 왜냐하면 음지식물도 아예 빛이 없으면 안 되는데 반음지 식물도 마찬가지아니겠습니까? 여튼
          저의 댓글이 도움 되셨길 바랍니다
        </div>
        <ReplyModify />
      </div>
    </li>
  );
}
