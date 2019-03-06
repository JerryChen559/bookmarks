import React, { Fragment, useState } from "react";
import ReactDom from "react-dom";
import logo from "./logo.svg";
import smiley from "./Happy_smiley_face.png";
import "./App.css";
import LinkCard from "./Components/LinkCard";

const App = () => {
  const [cardData, setCardData] = useState([
    { linkName: "my link", linkHref: "https://github.com" }
  ]);

  const [newCard, setNewCard] = useState({ linkName: "", linkHref: "" });

  // combination of CDM and CDU
  // useEffect(() => {
  //   API.ping("asdf");

  //   return () => {
  //     API.stopPing();
  //   };
  // });

  const dispatchCardSet = payload => {
    let oldArray = cardData;
    let newArray = [...oldArray, payload];
    setCardData(newArray);
    setNewCard({ linkName: "", linkHref: "" });
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
        </ul>
      </nav>
      <main>
        <div className="leftContent">
          <img src={logo} className="App-logo" alt="logo" />

          <form onSubmit={e => e.preventDefault()}>
            <h2 className="formTitle">Add a bookmark </h2>
            <div>
              <label htmlFor="linkTitle" className="formLabel">
                Enter a bookmark name
              </label>
              <input
                value={newCard.linkName}
                onChange={e =>
                  setNewCard({ ...newCard, linkName: e.currentTarget.value })
                }
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
                value={newCard.linkHref}
                onChange={e =>
                  setNewCard({ ...newCard, linkHref: e.currentTarget.value })
                }
                type="text"
                name="linkHref"
                minLength="7"
                placeholder="https://example.com/"
              />
            </div>
            <button onClick={() => dispatchCardSet(newCard)}>Add</button>
          </form>
        </div>
        <div className="rightContent">
          {/* <h2>1:04:22</h2> */}
          <LinkCard cards={cardData} />
        </div>
      </main>
    </Fragment>
  );
};

export default App;
