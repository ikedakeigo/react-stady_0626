

import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {

  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    console.log("useEffect");
    if (num > 0){
      if (num % 3 === 0) {
        faceShowFlag  ||  setFaceShowFlag(true);
      } else{
        faceShowFlag &&  setFaceShowFlag(false);
      };
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);




  return (
    <>
      <h1 style={{ color: "red" }}>こんちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウント</button>
      <br />

      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag &&  <p>😃</p>}
    </>
  );
};

export default App;
