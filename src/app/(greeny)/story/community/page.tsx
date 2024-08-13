// import NoResult from '@greeny/story/NoResult';
import PageHeading from '@greeny/story/PageHeading';
import PostList from '@greeny/story/PostList';
import SearchAndWrite from '@greeny/story/community/SearchAndWrite';
import Categories from '@greeny/story/community/Categories';

export default function Community() {
  return (
    <>
      <PageHeading text="커뮤니티" />
      <SearchAndWrite />
      <Categories />
      <PostList />
      {/* <NoResult /> */}
    </>
  );
}
