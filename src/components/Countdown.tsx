import React, { useState, useEffect } from 'react';
import { calculateTimeLeft } from '../utils/dateUtils';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeDigits = {
    days: timeLeft.days.toString().padStart(2, '0'),
    hours: timeLeft.hours.toString().padStart(2, '0'),
    minutes: timeLeft.minutes.toString().padStart(2, '0'),
    seconds: timeLeft.seconds.toString().padStart(2, '0'),
  };

  return (
    <div className="w-full mt-4 sm:mt-8">
     

      {/* Countdown Timer */}
      <div className="flex justify-center gap-2 sm:gap-4 md:gap-8">
        <CountdownUnit value={timeDigits.days} label="DAYS" />
        <CountdownUnit value={timeDigits.hours} label="HOURS" />
        <CountdownUnit value={timeDigits.minutes} label="MINUTES" />
        <CountdownUnit value={timeDigits.seconds} label="SECONDS" />
      </div>
    </div>
  );
};

interface CountdownUnitProps {
  value: string;
  label: string;
}

const CountdownUnit: React.FC<CountdownUnitProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-2 sm:p-4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 flex items-center justify-center shadow-glow">
        <span className="text-2xl sm:text-4xl md:text-5xl font-bold">{value}</span>
      </div>
      <span className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm tracking-wider opacity-70">{label}</span>
    </div>
  );
};

export default Countdown