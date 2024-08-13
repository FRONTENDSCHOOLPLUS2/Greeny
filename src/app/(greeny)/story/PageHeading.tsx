import styles from './Community.module.scss';

export default function PageHeading({ text }: { text: string }) {
  return <h1 className={styles.page_heading}>{text}</h1>;
}
