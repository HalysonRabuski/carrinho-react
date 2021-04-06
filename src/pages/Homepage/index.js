import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function Homepage() {
  return (
    <div className="home">
      <h1>Teste do Carrinho</h1>
      <Link id="cart1" to="/carrinho/abaixo10">
        Carrinho 1
      </Link>
      <Link id="cart2" to="/carrinho/acima10">
        Carrinho 2
      </Link>
    </div>
  );
}

export default Homepage;
