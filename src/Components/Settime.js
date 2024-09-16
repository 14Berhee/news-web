import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const [Restart, setRestart] = useState(0);

  useEffect(() => {
    if (start === false) {
      return;
    }
    const interval = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, start]);

  const onStop = () => {
    setStop(false);
  };
  const onStart = () => {
    setStart(true);
  };
  const onRestart = () => {
    setRestart(false);
    setRestart(0);
  };

  return (
    <div>
      <p>{time}</p>
      <button onClick={onStop}>Stop</button>
      <button onClick={onStart}>Start</button>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};
export default Timer;
