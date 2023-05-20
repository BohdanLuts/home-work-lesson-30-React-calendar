import React from 'react';
import styles from './CurrentMonthYear.module.sass';
import { format } from 'date-fns';

const CurrentMonthYear = () => {
  const currentMonthYear = format(new Date(), 'LLLL yyyy');

  return (
    <div className={styles.currentMonthYearWrapper}>
      <p className={styles.currentMonthYear}>{currentMonthYear}</p>
    </div>
  );
};

export default CurrentMonthYear;
