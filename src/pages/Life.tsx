import { useState } from "react";
const worker = new Worker(new URL("../workers/answer.js", import.meta.url));

export function Life() {
  const [answer, setAnswer] = useState(0);
  const [count, setCount] = useState(0);

  const getAnswerToLife = () => {
    worker.postMessage("answer")
    worker.onmessage = (e) => {
      setAnswer(e.data)
    }
  }

  return (
    <>
      <h2>The answer to life is {answer && answer}</h2>
      <h4>The count is {count}</h4>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={getAnswerToLife}>Get Answer</button>
    </>
  );
}
