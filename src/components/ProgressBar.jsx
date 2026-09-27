import { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setValue(progress);
    }, 500);
  }, []);

  return (
    <div>
      <div className="container">
        <div
          className="progress-bar"
          style={{ transform: `translateX(-${100 - value}%)` }}
          role="progressbar"
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={value}
        >
          {value}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
