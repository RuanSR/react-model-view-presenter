import React from "react";
import "./styles.css";
import MyComp from "./MyComp/view";

export default function App() {
  const [isChanged, setIsChanged] = React.useState<boolean>(false);

  function updateMob() {
    setIsChanged((prev) => !prev);
  }

  return (
    <div className="App">
      <button onClick={updateMob}>Change</button>
      <MyComp isMobile={isChanged} />
    </div>
  );
}
