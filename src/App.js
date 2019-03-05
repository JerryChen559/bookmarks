import React, { Fragment } from "react";
import logo from "./logo.svg";
import smiley from "./Happy_smiley_face.png";
import "./App.css";

const App = () => {
  const linkImageStyle = {
    // backgroundImage: 'url(\'blahblahblah\')'
  };
  return (
    <Fragment className="App">
      <nav className="navigation">
        {/* Edit <code>src/App.js</code> and save to reload. */}
        <a>
          <img height="40px" src={smiley} className="App-logo" alt="logo" />
          {/* <img height="40px" src={smiley} /> */}
        </a>
        <ul>
          <li>Home</li>
          {/* <li>About</li> */}
          {/* <li>React</li> */}
        </ul>
      </nav>
      <main>
        <div className="leftContent">
          <img src={logo} className="App-logo" alt="logo" />
          <form action="">
            <h2 className="formTitle">Add a bookmark </h2>
            <div>
              <label htmlFor="linkTitle" className="formLabel">
                Enter a bookmark name
              </label>
              <input
                type="text"
                name="linkTitle"
                minLength="1"
                maxLength="25"
                placeholder="25 characters max"
              />
            </div>
            <div>
              <label htmlFor="linkHref" className="formLabel">
                Enter a bookmark name
              </label>
              <input
                type="text"
                name="linkHref"
                minLength="7"
                placeholder="https://example.com/"
              />
            </div>
            <button>Add</button>
          </form>
        </div>
        <div className="rightContent">
          {/* <h2>25:45m</h2> */}
          {/* <h2>40m</h2> */}
          <div className="linkCard">
            <div className="linkCardImage" style={linkImageStyle}>
              IMAGE
            </div>
            <div className="linkCardLink">
              <h2>
                <a href="#">my link</a>
              </h2>
            </div>
          </div>
          <div className="linkCard">
            <div className="linkCardImage" style={linkImageStyle}>
              IMAGE
            </div>
            <div className="linkCardLink">
              <h2>
                <a href="#">my link</a>
              </h2>
            </div>
          </div>
          <div className="linkCard">
            <div className="linkCardImage" style={linkImageStyle}>
              IMAGE
            </div>
            <div className="linkCardLink">
              <h2>
                <a href="#">my link</a>
              </h2>
            </div>
          </div>
          <div className="linkCard">
            <div className="linkCardImage" style={linkImageStyle}>
              IMAGE
            </div>
            <div className="linkCardLink">
              <h2>
                <a href="#">my link</a>
              </h2>
            </div>
          </div>
          <div className="linkCard">
            <div className="linkCardImage" style={linkImageStyle}>
              IMAGE
            </div>
            <div className="linkCardLink">
              <h2>
                <a href="#">my link</a>
              </h2>
            </div>
          </div>
          <div className="linkCard">
            <div className="linkCardImage" style={linkImageStyle}>
              IMAGE
            </div>
            <div className="linkCardLink">
              <h2>
                <a href="#">my link</a>
              </h2>
            </div>
          </div>
          <div className="linkCard">
            <div className="linkCardImage" style={linkImageStyle}>
              IMAGE
            </div>
            <div className="linkCardLink">
              <h2>
                <a href="#">my link</a>
              </h2>
            </div>
          </div>
          <div className="linkCard">
            <div className="linkCardImage" style={linkImageStyle}>
              IMAGE
            </div>
            <div className="linkCardLink">
              <h2>
                <a href="#">my link</a>
              </h2>
            </div>
          </div>
          <div className="linkCard">
            <div className="linkCardImage" style={linkImageStyle}>
              IMAGE
            </div>
            <div className="linkCardLink">
              <h2>
                <a href="#">my link</a>
              </h2>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default App;
