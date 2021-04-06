import React from "react";
import "./styles.css";
// import { Container } from './styles';

function Card(props) {
  return <div className="card">{props.children}</div>;
}

export default Card;
