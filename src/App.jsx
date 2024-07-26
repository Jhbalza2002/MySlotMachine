import { useState } from "react";
import SlotMachine from "./components/SlotMachine/SlotMachine";
import Navbar from "./components/navBar/navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <SlotMachine />
    </div>
  );
};

export default App;
