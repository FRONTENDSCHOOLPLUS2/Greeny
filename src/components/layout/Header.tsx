import styles from './Header.module.scss';
import logo from '@images/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.layout_wrapper}>
      <Link href="/" className={styles.logo}>
        <Image src={logo} alt="greeny" width={100} height={30} />
      </Link>
    </header>
  );
}
