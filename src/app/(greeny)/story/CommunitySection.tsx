import styles from './Community.module.scss';
import SectionHeader from '@greeny/story/SectionHeader';

type Props = {
  sectionInfo: {
    title: string;
    url: string;
  };
  children: React.ReactNode;
};

export default function CommunitySection({ sectionInfo, children }: Props) {
  return (
    <section className={styles.section}>
      <SectionHeader {...sectionInfo} />
      {children}
    </section>
  );
}
