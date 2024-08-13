import Image from 'next/image';
import NormalProfile from '@images/NormalProfile.svg';
import MyPlantIcon from '@images/MyPlantIcon.svg';
import MyPostIcon from '@images/MyPostIcon.svg';
import PlantImg1 from '@images/PlantImg1.png';
import PlantImg2 from '@images/PlantImg2.png';
import PlantImg3 from '@images/PlantImg3.png';
import PlantImg4 from '@images/PlantImg4.png';
import ProfileEditIcon from '@images/ProfileEditIcon.svg';
import Bookmark from '@images/Bookmark.svg';
import LogOutIcon from '@images/LogOutIcon.svg';

import styles from './Profile.module.scss';

export default async function Profile() {
  const isFrofile = true;

  return (
    <div className={styles.main_wrapper}>
      <div className={styles.top}>
        <div className={styles.profile_panel}>
          <Follow cnt={12} title="팔로워" />
          <div className={styles.thumbnail}>
            <Image src={NormalProfile} alt="썸네일 이미지" />
            <p className="2/3">식집사</p>
            <span className="3/3">greeny@plant.com</span>
          </div>
          <Follow cnt={30} title="팔로잉" />
        </div>
      </div>
      <div className={styles.bottom}>
        {isFrofile ? (
          <ul className={styles.option_list}>
            <li>
              <Option image={ProfileEditIcon} title="프로필 수정" />
            </li>
            <li>
              <Option image={Bookmark} title="게시물 스크랩" />
            </li>
            <li>
              <Option image={LogOutIcon} title="로그아웃" />
            </li>
          </ul>
        ) : (
          <Tab />
        )}
      </div>
    </div>
  );
}

function Follow({ cnt = 0, title = '' }) {
  return (
    <div className={styles.follow}>
      <p>{cnt}</p>
      <span>{title}</span>
    </div>
  );
}

function Tab() {
  const idx = 0;
  return (
    <>
      <ul className={styles.tab_menu}>
        <li>
          <Image src={MyPlantIcon} alt="내 식물" />
        </li>
        <li>
          <Image src={MyPostIcon} alt="내 글" />
        </li>
      </ul>
      {idx === 0 ? (
        <ul className={styles.tab_item_plant_container}>
          <li>
            <Image src={PlantImg1} alt="식물 썸네일" />
          </li>
          <li>
            <Image src={PlantImg2} alt="식물 썸네일" />
          </li>
          <li>
            <Image src={PlantImg3} alt="식물 썸네일" />
          </li>
          <li>
            <Image src={PlantImg4} alt="식물 썸네일" />
          </li>
        </ul>
      ) : (
        <div></div>
      )}
    </>
  );
}

function Option({ image = ProfileEditIcon, title = '' }) {
  return (
    <div className={styles.option_wrapper}>
      <Image src={image.src} alt={title} width={18} height={18} />
      <p>{title}</p>
    </div>
  );
}
