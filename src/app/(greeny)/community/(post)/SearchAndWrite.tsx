import Search from '@greeny/community/Search';
import post from '@greeny/community/(post)/Post.module.scss';
import Image from 'next/image';

export default function SearchAndWrite() {
  return (
    <div className={post.search_container}>
      <div>
        <Search />
      </div>
      <button type="button" className={post.btn_write}>
        <Image src="/images/PostAddIcon.svg" width={18} height={18} alt="write" />
      </button>
    </div>
  );
}
