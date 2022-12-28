import React, { useState } from "react";

const Calendar = () => {
  const [date, setDate] = useState("");

  const onChange1 = (event) => {
    setDate(event.target.value);
  };

  let years = Math.floor(date / (1000 * 60 * 60 * 24));
  let days = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let hours = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
  let minutes = Math.floor((date % (1000 * 60)) / 1000);

  console.log(date);
  return (
    <>
      <div className="clock-input">
        <input
          type="date"
          name="time-to"
          class="time-to"
          id="time-to"
          value={date}
          onChange={onChange1}
        />
      </div>
      <div class="container">
        <div class="clock-column">
          <p class="clock-day clock-timer"> {years} </p>
          <p class="clock-label">Days</p>
        </div>

        <div class="clock-column">
          <p class="clock-hours clock-timer"> {days} </p>
          <p class="clock-label">Hours</p>
        </div>

        <div class="clock-column">
          <p class="clock-minutes clock-timer"> {hours} </p>
          <p class="clock-label">Minutes</p>
        </div>

        <div class="clock-column">
          <p class="clock-seconds clock-timer"> {minutes} </p>
          <p class="clock-label">Seconds</p>
        </div>
      </div>
    </>
  );
};

export default Calendar;
