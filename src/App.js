import React, { useState } from "react";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";

export default function App() {
  const [mode, setmode] = useState("light")
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "#04010c";
    } else {
      setmode("light")
      document.body.style.backgroundColor = "white";

    }
  }
  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <TextArea mode={mode} />
    </>
  );
}
