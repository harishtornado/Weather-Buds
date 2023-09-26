import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className="h-full grid row-span-1 grid-cols-3 gap-1">
      <div className="grid-span-1 Clock_block">
        <h1 className="text-slate-900">{hours}</h1>
      </div>
      <div className="grid-span-1 Clock_block">
        <h1 className="text-slate-900">{minutes}</h1>
      </div>
      <div className="grid-span-1 Clock_block">
        <h1 className="text-slate-900">{seconds}</h1>
      </div>
    </div>
  );
};

export default Clock;
