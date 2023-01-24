import React from "react";
import "./Items.css";

const Item = (props) => {
  const releaseDate = new Date(props.first_release_date);
  let date =
    releaseDate.getDate() > 9
      ? releaseDate.getDate()
      : "0" + releaseDate.getDate();
  let month =
    releaseDate.getMonth() > 8
      ? releaseDate.getMonth()
      : "0" + releaseDate.getMonth();
  return (
    <div className="game-main-div">
      <div className="item-img"></div>
      <div className="item-body">
        <p className="item-name">{props.name}</p>
        <p className="item-date">
          Release Date: {`${date}/${month}/${releaseDate.getFullYear()}`}
        </p>
        <p className="item-summary">{props.summary.slice(0, 300) + "..."}</p>
      </div>
      <div className="item-rating">
        <div>{Math.floor(props.rating)}</div>
      </div>
    </div>
  );
};

export default Item;
