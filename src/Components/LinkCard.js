import React, { Fragment } from "react";

const LinkCard = props => {
  const linkImageStyle = {
    // backgroundImage: 'url(\'blahblahblah\')'
  };

  const mappedData = props.cards.map((card, i) => {
    return (
      <div key={i} className="linkCard">
        <div className="linkCardImage" style={linkImageStyle}>
          IMAGE
        </div>
        <div className="linkCardLink">
          <h2>
            <a href={card.linkHref}>{card.linkName}</a>
          </h2>
        </div>
      </div>
    );
  });

  return <Fragment>{mappedData}</Fragment>;
};

export default LinkCard;
