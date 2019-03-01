import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <Fragment className="App">
      <nav className="navigation">
        Edit <code>src/App.js</code> and save to reload.
        <a>
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>React</li>
          </ul>
        </a>
      </nav>
      <main>
        <div className="leftContent">
          <img src={logo} className="App-logo" alt="logo" />
          <form action="">
            <h2 className="formTitle">Add a bookmark </h2>
            <div>
              <label htmlFor="linkTitle" />
            </div>
            <div>x</div>
            <button>x</button>
          </form>
        </div>
        <div className="rightContent">
          <h2>15m</h2>
        </div>
      </main>
    </Fragment>
  );
};

export default App;
