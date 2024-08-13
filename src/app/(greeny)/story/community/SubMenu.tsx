import Image from 'next/image';
import DropDown from '@greeny/story/community/DropDown';

export default function SubMenu() {
  return (
    <>
      <button>
        <Image src="/images/SubMenuIcon.svg" width={14} height={14} alt="bookmark" />
      </button>
      <DropDown />
    </>
  );
}
