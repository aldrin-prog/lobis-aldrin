import React, { useState, useEffect } from "react";

const TimerEvent = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
  

  function getTimeRemaining() {
    const targetTime = new Date();
  targetTime.setMinutes(targetTime.getMinutes() + 10);
    const now = new Date();
    const end = new Date(targetTime);
    const difference = Math.max(end - now, 0); // Ensure no negative values
    return {
      total: difference,
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timerId); // Cleanup interval on unmount
  }, []);

  if (timeLeft.total <= 0) {
    return <p>Time's up!</p>;
  }

  return (
    <div className="bg-white">
      <h1>Countdown Timer</h1>
      <p>
        {String(timeLeft.hours).padStart(2, "0")}:
        {String(timeLeft.minutes).padStart(2, "0")}:
        {String(timeLeft.seconds).padStart(2, "0")}
      </p>
    </div>
  );
};

export default TimerEvent;
