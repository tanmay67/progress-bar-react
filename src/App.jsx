import { useEffect, useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import AllProgressBars from "./components/AllProgressBars";

function App() {
  const [progressBars, setProgressBars] = useState([0, 30, 50, 70, 90, 100]);

  return (
    <div>
      <h1>Hello World</h1>
      {/* <ProgressBar progress={progress} /> */}
      <AllProgressBars progressBars={progressBars} />
    </div>
  );
}

export default App;
