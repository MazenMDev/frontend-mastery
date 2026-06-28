"use client";

import { useEffect, useRef, useState } from "react";

function Home() {
  // const [counter, setCounter] = useState(0);
  // const [success, setSuccess] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    //   setCounter(counter + 1);
    //   if (counter === 10) {
    //     setSuccess(true);
    //   }
    if (inputRef.current) {
      inputRef.current.focus();
    }

    console.log(inputRef.current?.value);
  };

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);  
  }

  // useEffect(() => {
  //   console.log("This will only run one time when the component mounts");
  // }, [success]);

  return (
    <main>
      <h1>Home Page</h1>
      {/* <p>Counter: {counter}</p> */}
      <input type="text" placeholder="Enter something..." ref={inputRef} onChange={handleInputChange} />
      <button onClick={handleClick}>Click to focus</button>
    </main>
  );
}

export default Home;
