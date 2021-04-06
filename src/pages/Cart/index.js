import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Item from "../../components/Item";
import "./styles.css";
import api from "../../services/api";
import Swal from "sweetalert2";

function Cart(props) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState();

  async function getItems() {
    const response = await api.get(props.match.params.url);

    console.log(response.data);
    setItems(response.data.items);
    setTotal(response.data.value);
  }

  function handlePurchase() {
    Swal.fire({
      title: "Você tem certeza?",
      text: "Ao clicar em sim sua compra será confirmada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim, quero comprar!",
      cancelButtonText: "Não, cancelar",
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          "Compra efetuada com sucesso!",
          "Sua compra foi confirmada!",
          "success"
        );
        props.history.push("/");
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        props.history.push("/");
      }
    });
  }

  useEffect(() => {
    getItems();
  }, []);

  function formatNumber(value) {
    let string = value.toString().replace(".", ",");

    return Number.isNaN(parseFloat(string)) ? "0,00" : string;
  }

  return (
    <div className="cart">
      <Card>
        <div className="header">
          <h1>Meu carrinho</h1>
        </div>
        <div className="content">
          {items.length > 0 ? (
            items.map((item) => (
              <Item
                imageUrl={item.imageUrl}
                name={item.name}
                price={formatNumber(item.price / 100)}
                sellingPrice={formatNumber(item.sellingPrice / 100)}
              />
            ))
          ) : (
            <p>Nenhum item no carrinho</p>
          )}
        </div>
        <div className="footer">
          <div id="div-total">
            <p>Total</p>
            <p className="total">R$ {formatNumber(total / 100)}</p>
          </div>
          {total / 100 > 10 ? (
            <p id="frete">Parabéns, sua compra tem frete grátis !</p>
          ) : null}
        </div>
        <button disabled={!items.length > 0} onClick={() => handlePurchase()}>
          Finalizar compra
        </button>
      </Card>
    </div>
  );
}

export default Cart;
