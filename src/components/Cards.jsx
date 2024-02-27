import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../Context.js";
import Web from "./Web.jsx";

function Cards({ items }) {
  const {
    selected,
    setSelected,
    totalCards,
    setTotalCards,
    total,
    setTotal,
    setPags,
    setLlengs,
    totalWeb,
    setTotalWeb,
  } = useContext(MyContext);

  // totalPrice is the price of the general cards added up. totalWeb is the price of extras for the Web card
  const handleOnChange = (position) => {
    const updatedSelected = selected.map((item, index) =>
      index === position ? !item : item
    );
    setSelected(updatedSelected);
    const totalPrice = updatedSelected.reduce((sum, currentState, index) => {
      if (currentState) {
        return (sum += items[index].price);
      }
      return sum;
    }, 0);
    setTotalCards(totalPrice);
    // if 'Web' isn't checked we set pags anc llengs to 0 to update total
    if (!selected[2]) {
      setLlengs(0);
      setPags(0);
      setTotalWeb(0);
      setTotal(totalPrice);
    } else {
      setTotal(totalPrice + totalWeb);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      {items.map((item, index) => (
        <div
          key={index}
          className="d-flex flex-wrap flex-row align-items-center card m-1 border-0 shadow rounded-3"
          style={{ width: "30rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p id="textCard" className="card-text fs-6 fw-bold">
              {item.text}
            </p>
          </div>
          <div className="d-flex flex-row card-body fs-4">
            <p className="fs-3 fw-bold mb-0">{item.price}</p>
            <p className="fs-6 align-self-end mb-1"> €</p>
          </div>
          <input
            type="checkbox"
            className=""
            id={item.index}
            checked={selected[index]}
            onChange={() => handleOnChange(index)}
          />
          <label
            id="textCard"
            className="ms-2 me-4 fw-bold"
            htmlFor="btncheck1"
          >
            {index}
          </label>
          <div className="break"></div>
          {index === 2 && selected[index] === true ? <Web /> : null}
        </div>
      ))}
    </div>
  );
}

export default Cards;
