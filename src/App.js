// import "./App.css";
import { useState } from "react";
import Car from "./components/Car";
import Count from "./components/Count";
import Props from "./components/Props";
import Wellcome from "./components/Wellcome";

function App(props) {
  const products = [
    { id: 1, name: "dactrong" },
    { id: 2, name: "trankieu" },
    { id: 3, name: "Thuy vân" },
  ];
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Click</button>
      <button onClick={() => setCount(count -1)}>TRừ</button>
      <Wellcome name="Nguyen dac trong" age="21" adress="Bắc Ninh">
        clother 1
      </Wellcome>
      <Car></Car>
      <Count></Count>
      {products.map((item) => (
        <Props data={item}></Props>
      ))}
    </div>
  );
}

export default App;
