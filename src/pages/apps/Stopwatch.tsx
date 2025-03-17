import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

const formatedTime = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((timeInSeconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = timeInSeconds.toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

const Stopwatch = () => {
  const [timer, setTimer] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: number;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setTimer(0);
    setIsRunning(false);
  };

  return (
    <div className="admin-wrapper">
      <Sidebar />
      <main className="app-container">
        <h1>Stopwatch</h1>
        <section>
          <div className="stopwatch">
            <h2>{formatedTime(timer)}</h2>
            <button onClick={handleStart}>
              {isRunning ? "Pause" : "Start"}
            </button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Stopwatch;
