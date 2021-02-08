import React, { useEffect, useState } from "react";

const Progress = () => {
  const [progress, setProgress] = useState(0);

  const calculatePercentage = () => {
    const scrolled = window.scrollY;

    const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const percentage = (scrolled / total) * 100;

    setProgress(percentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", calculatePercentage);
    return () => {
      window.removeEventListener("scroll", calculatePercentage);
    };
  }, [calculatePercentage]);

  return (
    <div
      className="w-full fixed left-0 top-0 h-2 transition duration-500 ease-in-out"
      style={{
        background: `linear-gradient(to right, black ${progress}%, transparent 0)`,
      }}
    ></div>
  );
};

export default Progress;
