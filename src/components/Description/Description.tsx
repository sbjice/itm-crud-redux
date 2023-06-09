import { memo, useMemo, useState } from 'react';
import styles from './Description.module.css';
import { DESCRIPTION_MAX_LENGTH } from '../../constants/constants';

interface DescriptionProps {
  text: string;
  maxLength?: number;
}

export const Description = memo(({text, maxLength = DESCRIPTION_MAX_LENGTH}: DescriptionProps) => {
  const [showLong, setShowLong] = useState(false);
  const needButton = text.length > maxLength;

  const onClick = () => {
    setShowLong(!showLong);
  }

  const textShown = useMemo(() => {
    if (text.length <= maxLength) return text;
    return showLong 
            ? text
            : text.substring(0, maxLength) + '...' ;
  }, [showLong, text, maxLength]);

  const buttonText = useMemo(() => {
    return showLong ? 'Hide Details' : 'Show Details';
  }, [showLong])
  

  return (
    <div className={styles.description}>
      <h4>{textShown}</h4>
      {needButton && <button onClick={onClick}>{buttonText}</button>}
    </div>
  )
})