import Image from 'next/image';
import styles from '@greeny/story/Community.module.scss';
import Link from 'next/link';
import { UserSimple } from '@/types/user';

type Props = {
  user: UserSimple;
  fontStyle: 'sm_regular' | 'sm_medium' | 'md_semibold';
  component?: React.ReactNode;
};

export default function UserProfile({ user, fontStyle, component }: Props) {
  return (
    user && (
      <div className={styles.user_profile}>
        <Link href="/">
          <div className={styles.basic}>
            <div className={styles.profile_image}>
              {/* <Image src="/images/NormalProfile.svg" width={32} height={32} alt="프로필" /> */}
              <Image src={user.image ? 'https://api.fesp.shop' + user.image : '/images/NormalProfile.svg'} width={32} height={32} alt="프로필" />
            </div>
            <p className={styles[fontStyle]}>{user.name}</p>
          </div>
        </Link>
        {component}
      </div>
    )
  );
}
