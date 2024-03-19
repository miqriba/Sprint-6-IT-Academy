import React from "react";
import { useState } from "react";
import { MyContext } from "./Context.js";
import { PresContext } from "../pages/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Cards from "../components/Cards.jsx";
import Demanar from "../components/Demanar.jsx";
import Home from "./home.jsx";
import Pressupostos from "../components/Pressupostos.jsx";
import { LabelToggle } from "../components/Components.style";

// const { pressupostos } = useContext(PresContext);

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
  const [discount, setDiscount] = useState(true);

  const [pags, setPags] = useState(0);
  const [llengs, setLlengs] = useState(0);

  const [pressupostos, setPressupostos] = useState([]);

  const handleDiscount = () => {
    setDiscount(!discount);
  };

  return (
    <Router>
      <div className="content"></div>
      <PresContext.Provider value={{ pressupostos, setPressupostos }}>
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
            totalCards,
            setTotalCards,
            totalWeb,
            setTotalWeb,
            discount,
          }}
        >
          <div className="d-flex flex-column align-items-center">
            <div
              style={{
                background: 'url("src/assets/background.svg") no-repeat center',
                backgroundSize: "100%",
              }}
              className="card w-75 mt-2 mb-3 border-0 p-4 rounded-4 justify-content-center align-items-center"
            >
              <h2 className="fw-bold">Aconsegueix la millor qualitat</h2>
            </div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/buy"
                element={
                  <div className="d-flex flex-column align-items-center">
                    <div
                      style={{ fontSize: "12px" }}
                      className="d-flex flex-row justify-content-center align-items-center fw-bold"
                    >
                      <p className="m-0">Pagament mensual (no) </p>
                      <input
                        className="m-2"
                        type="checkbox"
                        name="discount"
                        value={discount}
                        checked={discount}
                        onChange={handleDiscount}
                      />
                      <p className="m-0">Pagament anual (si)</p>
                    </div>
                    <Cards items={items} />
                    <div
                      style={{ width: "30rem" }}
                      className="d-flex justify-content-end flex-row"
                    >
                      <p className="fw-bold fs-5">{`Preu pressupostat: ${
                        discount ? total * 0.8 : total
                      }€`}</p>
                    </div>
                    <Demanar items={items} />
                    <Pressupostos />
                  </div>
                }
              ></Route>
            </Routes>
          </div>
        </MyContext.Provider>
      </PresContext.Provider>
    </Router>
  );
}

export default App;
