import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/UI/Navbar";
import UrlForm from "./components/UrlForm";
import Domains from "./components/Domains";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route path="/analytics/domains" element={<Domains />} />
            <Route path="/" element={<UrlForm />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
