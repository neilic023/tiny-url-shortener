import React from "react";
import "./App.css";
import Navbar from "./components/UI/Navbar";
import UrlForm from "./components/UrlForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <UrlForm />
      </header>
    </div>
  );
}

export default App;
