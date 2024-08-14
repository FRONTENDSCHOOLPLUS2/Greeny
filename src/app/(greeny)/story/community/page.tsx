import PageHeading from '../PageHeading';
import PostList from '../PostList';
import Categories from './Categories';
import SearchAndWrite from './SearchAndWrite';

// import NoResult from '@greeny/story/NoResult';

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
