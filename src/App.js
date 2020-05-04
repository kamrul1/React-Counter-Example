import React, { useState } from "react";
import "./styles.css";

function Button(props) {
  return <button onClick={props.onClickFunction}>+1</button>;
}

//Display
function Display(props) {
  return <div>{props.message}</div>;
}

export default function App() {
  const [counter, setCounter] = useState(42);
  const incrementCounter = () => setCounter(counter * 2);
  return (
    <React.Fragment>
      <Button onClickFunction={incrementCounter} />
      <Display message={counter} />
    </React.Fragment>
  );
}
