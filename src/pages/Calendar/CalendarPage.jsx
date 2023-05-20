import React from 'react';
import CurrentDate from '../../components/CurrentDate';
import MonthTable from '../../components/MonthTable';
import styles from './CalendarPage.module.sass';

export default function CalendarPage () {
  return (
    <div className={styles.page}>
      <CurrentDate />
      <MonthTable />
    </div>
  );
}
