import { useEffect, useState } from "react";

// InitialTime should be seconds
export const useTimer = function (initialTime: number) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [start, setStart] = useState(false);
  useEffect(
    function () {
      if (!start) return;
      const intervalId = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    },
    [setTimeLeft, start, initialTime],
  );

  useEffect(
    function () {
      if (timeLeft === 0 && start) {
        setTimeLeft(initialTime);
        setStart(false);
      }
    },
    [setStart, setTimeLeft, timeLeft, initialTime, start],
  );

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const result = start ? formatMinutesAndSeconds(minutes, seconds) : "";

  return { result, setStart };
};

function formatMinutesAndSeconds(minutes: number, seconds: number) {
  const newMins = minutes < 10 ? `0${minutes}` : minutes;
  const newSecs = seconds < 10 ? `0${seconds}` : seconds;

  return `${newMins}:${newSecs}`;
}
