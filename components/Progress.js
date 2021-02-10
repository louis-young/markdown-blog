import React, { useEffect, useState } from "react";

import styles from "./Progress.module.css";

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

  return <progress className={styles.progress} value={progress} max="100"></progress>;
};

export default Progress;
