import React, { useEffect, useState } from "react";

const DateTime = () => {
  const [dateTime, setDateTime] = useState("");
  const showDate = new Date();
  const showDateToday = showDate.toDateString();
  const showTime = dateTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  useEffect(() => {
    setInterval(() => {
      const dateToday = new Date();
      setDateTime(dateToday);
    }, 1000);
  }, []);
  return (
    <div className="w-1/6 m-1 border border-black inset-x-2 rounded-md bg-gray-50 dark:bg-neutral-900 dark:border-white dark:text-white">
      <div className="text-center text-lg p-4">
        <p>{showDateToday}</p>
        <p>{showTime}</p>
      </div>
    </div>
  );
};

export default DateTime;
