// import NoResult from '@/app/(greeny)/community/NoResult';
import PageHeading from '@greeny/community/PageHeading';
import PostList from '@greeny/community/PostList';
import SearchAndWrite from '@greeny/community/(post)/SearchAndWrite';

export default function QNA() {
  return (
    <>
      <PageHeading text="Q&A" />
      <SearchAndWrite />
      <PostList />
      {/* <NoResult /> */}
    </>
  );
}
