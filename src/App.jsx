import React from "react";
import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import { MyContext } from "./Context.js";

function App() {
  const items = [
    {
      title: "Seo",
      text: "Programació d'una web amb Seo",
      price: 300,
    },
    {
      title: "Ads",
      text: "Programació d'una web amb Ads",
      price: 400,
    },
    {
      title: "Web",
      text: "Programació d'una web amb Web",
      price: 500,
    },
  ];

  const [selected, setSelected] = useState([false, false, false]);
  const [totalWeb, setTotalWeb] = useState(0);
  const [totalCards, setTotalCards] = useState(0);
  const [total, setTotal] = useState(0);

  const [pags, setPags] = useState(0);
  const [llengs, setLlengs] = useState(0);

  const [pagsLlengs, setPagsLlengs] = useState([0, 0]);

  return (
    <MyContext.Provider
      value={{
        selected,
        setSelected,
        total,
        setTotal,
        pags,
        setPags,
        llengs,
        setLlengs,
        pagsLlengs,
        setPagsLlengs,
        totalCards,
        setTotalCards,
        totalWeb,
        setTotalWeb,
      }}
    >
      <div className="d-flex flex-column align-items-center">
        <div
          style={{
            background: 'url("src/assets/background.svg") no-repeat center',
            backgroundSize: "100%",
          }}
          className="card w-75 mt-2 mb-5 border-0 p-4 rounded-4 justify-content-center align-items-center"
        >
          <h2 className="fw-bold">Aconsegueix la millor qualitat</h2>
        </div>
        <div className="d-flex flex-column align-items-center">
          <Cards items={items} />
          <div
            style={{ width: "30rem" }}
            className="d-flex justify-content-end flex-row"
          >
            <p className="fw-bold fs-5">{`Preu pressupostat: ${total}€`}</p>
          </div>
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
