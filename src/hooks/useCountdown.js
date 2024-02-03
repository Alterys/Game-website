import { useEffect, useState } from "react";

const useCountdown = ({ onDone, initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (seconds <= 0) {
      clearInterval(intervalId);
      onDone();
    }
  }, [seconds]);

  const reset = () => {
    clearInterval(intervalId);
    setSeconds(initialSeconds);

    setIntervalId(
      setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000)
    );
  };

  return { seconds, reset };
};

export default useCountdown;
