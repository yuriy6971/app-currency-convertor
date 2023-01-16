import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content.jsx";
import NavBarFunc from "./components/NavBar/NavBarFunc";

const App = () => {
  return (
    <div className="app_wrapper">
      <Header />
      <NavBarFunc />

      <div className="app_wrapper_content">
        <Content />
      </div>
    </div>
  );
};

export default App;
