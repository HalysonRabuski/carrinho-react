import React from "react";
import "./styles.css";

function Item(props) {
  return (
    <div className="item">
      <img src={props.imageUrl} />
      <div className="content-info">
        <p className="name">{props.name}</p>
        <div className="pricing">
          <p className="price">R$ {props.price}</p>
          <p className="selling-price">R$ {props.sellingPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
