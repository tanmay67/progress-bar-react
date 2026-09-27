import ProgressBar from "./ProgressBar";

const AllProgressBars = ({ progressBars }) => {
  console.log(progressBars);
  return (
    <div>
      {progressBars.map((progressBar) => (
        <ProgressBar key={progressBar} progress={progressBar} />
      ))}
    </div>
  );
};

export default AllProgressBars;
