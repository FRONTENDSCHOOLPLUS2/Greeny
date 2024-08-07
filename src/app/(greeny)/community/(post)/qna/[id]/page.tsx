import Image from 'next/image';
import UserProfile from '@components/UserProfile';
import PostInfo from '@greeny/community/PostInfo';
import qnaDetail from './QnADetail.module.scss';
import ReplyList from '@greeny/community/(post)/ReplyList';
import ReplyInput from '@greeny/community/(post)/ReplyInput';
import styles from '@greeny/community/Community.module.scss';
import DropDown from '../../DropDown';
import ImageModal from '../../ImageModal';

export default function QnADetail() {
  return (
    <>
      {/* {id === '123' && <ImageModal />} */}
      <article className={qnaDetail.detail_container}>
        <section className={qnaDetail.content}>
          <h1 className={qnaDetail.title}>베란다에 이정도 그늘에서 키워도 되나요?</h1>
          {/* 다른 사용자 게시글일 때*/}
          <div className={qnaDetail.info}>
            {/* <UserProfile
            fontStyle="sm_medium"
            component={
              <div style={{ marginLeft: 'auto' }}>
                <Image src="/images/Bookmark.svg" width={18} height={18} alt="bookmark" />
              </div>
            }
          /> */}
            {/* 내 게시글일 때*/}
            <UserProfile
              fontStyle="sm_medium"
              component={
                <div style={{ marginLeft: 'auto' }}>
                  <Image src="/images/SubMenuIcon.svg" width={14} height={14} alt="bookmark" />
                </div>
              }
            />
          </div>
          <DropDown />
          <div>
            오른쪽에 있는 식물들 반양지, 반음지에서 키우라고 해서 저렇게 구분해놨는데 너무 해가 안드는것 같아서 좀 걱정되는데요, 저정도 광도도 괜찮을까요? 아니면 다 햇빛이 강하게 드는쪽으로 가는게
            좋을까요?
          </div>
          <PostInfo />
        </section>
        <section className={styles.reply}>
          <ReplyList />
          <ReplyInput />
        </section>
      </article>
    </>
  );
}
