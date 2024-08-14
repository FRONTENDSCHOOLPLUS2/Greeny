import styles from './Community.module.scss';
import CommunitySection from './CommunitySection';
import DiarySlider from './DiarySlider';
import PostList from './PostList';

export default async function Community() {
  return (
    <>
      <h1 className={styles.sr_only}>Community</h1>
      <CommunitySection sectionInfo={{ title: '식물 일기', url: '/story/diaries' }}>
        <DiarySlider />
      </CommunitySection>
      <CommunitySection sectionInfo={{ title: '커뮤니티', url: '/story/community' }}>
        <PostList />
      </CommunitySection>
    </>
  );
}
