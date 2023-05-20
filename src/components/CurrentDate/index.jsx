import React from 'react';
import { format } from 'date-fns';
import styles from './CurrentDate.module.sass';

const CurrentDate = () => {
  const weekday = format(new Date(), 'iiii');
  const day = format(new Date(), 'd');

  return (
    <div className={styles.currentDateWrapper}>
      <p className={styles.weekday}>{weekday}</p>
      <p className={styles.day}>{day}</p>
    </div>
  );
};

export default CurrentDate;
