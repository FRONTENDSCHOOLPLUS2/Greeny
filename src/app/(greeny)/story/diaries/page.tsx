import diary from './Diary.module.scss';
import DiaryItem from '@greeny/story/diaries/DiaryItem';
import PageHeading from '@greeny/story/PageHeading';
import Search from '@greeny/story/Search';

export default function Diaries() {
  return (
    <>
      <PageHeading text="식물 일기" />
      <div className={diary.search_container}>
        <Search />
      </div>
      <div className={diary.post_list}>
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
      </div>
    </>
  );
}
