import styles from './Modal.module.scss';

export default function Modal({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
  if (!isOpen) return null;
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>{children}</div>
    </div>
  );
}
