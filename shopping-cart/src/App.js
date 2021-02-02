import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Content } from "./components/content";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

