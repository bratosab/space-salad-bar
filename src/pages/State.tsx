import { useState } from "react";

export function State() {
  console.log("StateBatching Component was re-rendered");

  const [count, setCount] = useState(0);

  function increaseCounterHandler() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }

  function increaseCounterAsyncHandler() {
    const setters = new Promise((resolve) => {
        setCount((count) => count + 1);
        setCount((count) => count + 1);setCount((count) => count + 1);
        setCount((count) => count + 1);setCount((count) => count + 1);
        setCount((count) => count + 1);setCount((count) => count + 1);
        setCount((count) => count + 1);

        resolve(true)
    })

    setters.then(()=> console.log("done"))
    // setTimeout(() => {
    //     setCount((count) => count + 1);
    //     setCount((count) => count + 1);
    // }, 500);
  }
  return (
    <>
      <div className="card">
        <button onClick={increaseCounterHandler}>Increase synchronously</button>
        <br />
        <br />
        <button onClick={increaseCounterAsyncHandler}>
          Increase asynchronously
        </button>
        <p>count is {count}</p>
      </div>
    </>
  );
}
