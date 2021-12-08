import { useState } from "react";

let State = (props) => {
  const [value, setValue] = useState({ c1: 0, c2: 0 });

  let handleIncrement = () => {
    // value = value + 1;
    // let c1 = value.c1;
    // let c2 = value.c2;
    // setValue({ c1: c1 + 1, c2: c2 + 2 }); // Asyc
    setValue({ c1: value.c1 + 1, c2: value.c2 + 2 });
  };

  let handleDecrement = () => {
    let c1 = value.c1;
    let c2 = value.c2;
    setValue({ c1: c1 - 1, c2: c2 - 2 }); // Asyc
  };

  return (
    <div>
      <p>The current Count is: {value.c1}</p>
      <p>The current Another is: {value.c2}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default State;
