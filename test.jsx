import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Car brand="Ford" />
  </React.StrictMode>,
);

function Car(props) {
  return <h2>I am a {props.brand} car!</h2>;
}

// -----------------------------------------

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Garage brand="Toyota" price={30000} color="blue" />
  </React.StrictMode>,
);

function Garage(args) {
  return (
    <>
      <h2>I have a {args.brand} car!</h2>
      <h2>
        It costs ${args.price} and is {args.color}.
      </h2>
    </>
  );
}

// -----------------------------------------

function myCar() {
  const cars = ["Ford", "BMW", "Audi"];
  return (
    <>
      <h1>My Cars</h1>
      <ul>
        {cars.map((car) => () => {
          return <li>{car}</li>;
        })}
      </ul>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <myCar />
  </React.StrictMode>,
);

// -----------------------------------------

function myCar() {
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];
  return (
    <>
      <h1>My Cars</h1>
      <ul>
        {cars.map((car) => {
          return <li key={car.id}>{car.brand}</li>;
        })}
      </ul>
    </>
  );
}

// -----------------------------------------

function myForm() {
  const [name, setName] = React.useState("");

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <form>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <p>Current Value: {name}</p>
    </form>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <myForm />
  </React.StrictMode>,
);

// -----------------------------------------

import { createRoot } from "react-dom/client";
import { useState } from "react";
import { createPortal } from "react-dom";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div style={modalStyles}>
      <div style={modalContentStyles}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body,
  );
}

function myApp() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h1>My App</h1>
      <button onClick={() => setShowModal(true)}>Show Modal</button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2>Modal Title</h2>
        <p>This is a modal content.</p>
      </Modal>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <myApp />
  </React.StrictMode>,
);

// -----------------------------------------
import { createRoot } from "react-dom/client";
import { Suspense } from "react";
// import Fruits from "./Fruits";

function myApp() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Fruits />
      </Suspense>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <myApp />
  </React.StrictMode>,
);

// -----------------------------------------

import { createRoot } from "react-dom/client";
import { Suspense, lazy } from "react";

const Fruits = lazy(() => import("./Fruites"));

function myApp() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Fruits />
      </Suspense>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <myApp />
  </React.StrictMode>,
);

// -----------------------------------------

import { createRoot } from "react-dom/client";
import { forwardRef, useRef } from "react";

function myInput(props, ref) {
  return <input ref={ref} {...props} />;
}

function App() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <myInput ref={inputRef} placaeholder="Type something..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}


