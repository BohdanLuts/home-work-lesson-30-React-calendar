import React from 'react';
import { format, getMonth, getYear, getDaysInMonth } from 'date-fns';
import classNames from 'classnames';
import CurrentMonthYear from '../CurrentMonthYear';
import styles from './MonthTable.module.sass';

const MonthTable = () => {
  const currentDate = new Date();
  const currentMonth = getMonth(currentDate);
  const currentYear = getYear(currentDate);
  const daysInThisMonth = getDaysInMonth(currentDate);

  const calendarData = newCalendarData(
    currentYear,
    currentMonth,
    daysInThisMonth
  );

  return (
    <div className={styles.monthTableWrapper}>
      <CurrentMonthYear />
      <Month calendarData={calendarData} />
    </div>
  );
};

const TableHead = () => {
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <thead>
      <tr>
        {daysOfWeek.map((day, i) => (
          <th key={i} className={styles.dayOfWeek}>
            {day}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const Day = ({ day, isToday }) => {
  const dayClassName = classNames(
    styles.day,
    isToday ? styles.today : styles.notToday
  );

  return <td className={dayClassName}>{day}</td>;
};

const Week = ({ days }) => {
  return (
    <tr>
      {days.map((day, i) => (
        <Day
          key={i}
          day={day}
          isToday={Number(day) === Number(format(new Date(), 'd'))}
        />
      ))}
    </tr>
  );
};

const Month = ({ calendarData }) => {
  return (
    <table className={styles.calendarTable}>
      <TableHead />
      <tbody>
        {calendarData.map((week, i) => (
          <Week key={i} days={week} />
        ))}
      </tbody>
    </table>
  );
};

const newCalendarData = (year, month, daysInThisMonth) => {
  const calendarData = [];
  const firstDay = new Date(year, month, 1).getDay();
  const lastDay = new Date(year, month, daysInThisMonth).getDay();

  let currentWeek = [];
  let day = 1;

  for (let i = 0; i < firstDay; i++) {
    currentWeek.push('');
  }

  while (day <= daysInThisMonth) {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      calendarData.push(currentWeek);
      currentWeek = [];
    }
    day++;
  }

  for (let i = lastDay + 1; i <= 6; i++) {
    currentWeek.push('');
  }
  if (currentWeek.length > 0) {
    calendarData.push(currentWeek);
  }
  return calendarData;
};

export default MonthTable;
