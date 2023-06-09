import { ReactComponent as CloseIcon } from '../../assets/icons/cross.svg';
import styles from './Modal.module.css';


interface ModalProps {
  title?: string;
  children?: JSX.Element | Array<JSX.Element>;
  shown?: boolean;
  onCLose?: () => void;
}

export const Modal = ({ title = 'Popup', children, shown = true, onCLose }: ModalProps) => {

  const onContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }

  return (
    <div
      className={`${styles.modal_overlay} ${shown ? '' : styles.hidden}`}
      onClick={onCLose}>
      <div
        className={styles.modal_container}
        onClick={onContainerClick}
      >
        <CloseIcon onClick={onCLose} />
        <h2 className={styles.modal_header}>{title}</h2>
        <div>
          {children}
        </div>
      </div>

    </div>
  )
}