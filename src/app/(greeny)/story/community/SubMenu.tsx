import styles from '@greeny/story/Community.module.scss';
import Image from 'next/image';
// import DropDown from '@greeny/story/community/DropDown';

export default function SubMenu() {
  return (
    <>
      <button className={styles.sub_menu}>
        <Image src="/images/SubMenuIcon.svg" width={14} height={14} alt="서브 메뉴" className={styles.sub_menu_icon} />
      </button>
      {/* <DropDown /> */}
    </>
  );
}
