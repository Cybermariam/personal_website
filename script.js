'use strict';

document.addEventListener('DOMContentLoaded', () => {
  function getCurrentTime() {
    const displayTime = document.getElementById('js-currentTime-utc');
    const currentTime = new Date();
    const hours = String(currentTime.getUTCHours()).padStart(2, '0');
    const minutes = String(currentTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getUTCSeconds()).padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds}`;

    displayTime.innerHTML = time;
  }

  function currentDay() {
    const today = new Date();
    const day = today.getDay();

    const dayOfTheWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const displayDay = document.getElementById('js-day-of-week');

    displayDay.innerHTML = dayOfTheWeek[day];
  }

  // Initial call to set the time and day immediately
  getCurrentTime();
  currentDay();

  // Update time every second
  setInterval(getCurrentTime, 1000);
});
