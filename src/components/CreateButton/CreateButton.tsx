import styles from './CreateButton.module.css';
import { ReactComponent as CloseIcon } from '../../assets/icons/cross.svg';

interface CreateButtonProps {
  onClick?: () => void;
}

export const CreateButton = ({onClick}: CreateButtonProps) => {
  return (
    <button onClick={onClick} className={styles.createButton}>
      <CloseIcon/>
    </button>
  )
}