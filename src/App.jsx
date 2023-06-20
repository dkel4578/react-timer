import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [flg, setFlg] = useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      if (flg) {
        setSec((prevSec) => prevSec + 1);
        if (sec >= 60) {
          setMin((preMin) => preMin + 1);
          setSec(0);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [sec, flg]);

  const start = () => {
    setFlg(true);
  };
  const restart = () => {
    setSec(0);
    setMin(0);
    setFlg(false);
  };

  const stop = () => {
    setFlg(false);
  };
  const formatNumber = (num) => {
    return num.toLocaleString("en-Us", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })
  }
  return (
    <>
      <h1>스톱워치</h1>
      <p>
        <span className="min">{formatNumber(min)} : </span>
        <span className="sec">{formatNumber(sec)}</span>
      </p>
      <div>
        <button onClick={start} 
        >시작</button>
        <button onClick={stop}>정지</button>
        <button className="btn" onClick={restart}>
          초기화
        </button>
      </div>
    </>
  );
}

export default App;
