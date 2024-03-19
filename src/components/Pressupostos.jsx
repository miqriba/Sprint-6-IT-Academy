import React, { useState, useContext, useEffect } from "react";
import { ButtonRound, InputGrey } from "./Components.style";
import { PresContext } from "../pages/Context";

const Pressupostos = () => {
  const { pressupostos, setPressupostos } = useContext(PresContext);
  const [sortedPressupostos, setSortedPressupostos] = useState("");
  const [search, setSearch] = useState("");

  // ⚠️ TODO: la ordenación se mantiene activa y no requiere ir apretando el botón cada vez
  //          dejar destacado el metodo de orden actual
  const handleClick = (e) => {
    if (e.target.textContent === "Data") {
      setPressupostos(
        [...pressupostos].sort((a, b) => new Date(a.data) - new Date(b.data))
      );
    } else if (e.target.textContent === "Import") {
      setPressupostos([...pressupostos].sort((a, b) => a.total - b.total));
    } else if (e.target.textContent === "Nom") {
      setPressupostos(
        [...pressupostos].sort(function (a, b) {
          if (a.nom > b.nom) {
            return 1;
          } else if (a.nom < b.nom) {
            return -1;
          } else {
            return 0;
          }
        })
      );
    }
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
    setSortedPressupostos(
      [...pressupostos].filter((a) =>
        a.nom.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <div className="d-flex flex-column" style={{ width: "30rem" }}>
        <h5 className="fw-bold m-2 mt-3 mb-3">Pressupostos en curs:</h5>
        {/* <div></div> */}

        <div className="align-self-end d-flex">
          <InputGrey
            className="align-self-center"
            style={{ height: "1.5rem", width: "5rem" }}
            placeholder="Buscar"
            type="text"
            value={search}
            onChange={handleChangeSearch}
          ></InputGrey>
          <button onClick={handleClick} className="text-dark btn">
            Data
          </button>
          <button onClick={handleClick} className="text-dark btn">
            Import
          </button>
          <button onClick={handleClick} className="text-dark btn">
            Nom
          </button>
        </div>

        {sortedPressupostos
          ? sortedPressupostos.map((item, index) => (
              <div
                key={index}
                className="d-flex flex-row justify-content-between card m-1 border-0 shadow rounded-3"
                style={{ width: "30rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title mb-0 fw-bold">{item.nom}</h5>
                  <p
                    style={{ fontSize: "11px" }}
                    className="card-text mb-0 fw-bold text-secondary"
                  >
                    {item.email}
                  </p>
                  <p
                    style={{ fontSize: "11px" }}
                    className="card-text fw-bold text-secondary"
                  >
                    {item.telefon}
                  </p>
                </div>
                <div className="card-body">
                  <p style={{ fontSize: "11px" }} className="fw-bold mb-0">
                    Serveis contractats:
                  </p>
                  <ul className="ms-0">
                    {item.serveis.map((it, ind, array) => (
                      <li key={ind} style={{ fontSize: "11px" }}>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-body">
                  <p className="fw-bold align-self-end text-secondary m-0">
                    Total:
                  </p>
                  <div className="d-flex flex-row fs-4">
                    <p className="fs-3 fw-bold mb-0">{item.total}</p>
                    <p className="fs-6 align-self-end mb-1"> €</p>
                  </div>
                </div>
              </div>
            ))
          : pressupostos
          ? pressupostos.map((item, index) => (
              <div
                key={index}
                className="d-flex flex-row justify-content-between card m-1 border-0 shadow rounded-3"
                style={{ width: "30rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title mb-0 fw-bold">{item.nom}</h5>
                  <p
                    style={{ fontSize: "11px" }}
                    className="card-text mb-0 fw-bold text-secondary"
                  >
                    {item.email}
                  </p>
                  <p
                    style={{ fontSize: "11px" }}
                    className="card-text fw-bold text-secondary"
                  >
                    {item.telefon}
                  </p>
                </div>
                <div className="card-body">
                  <p style={{ fontSize: "11px" }} className="fw-bold mb-0">
                    Serveis contractats:
                  </p>
                  <ul className="ms-0">
                    {item.serveis.map((it, ind, array) => (
                      <li key={ind} style={{ fontSize: "11px" }}>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-body">
                  <p className="fw-bold align-self-end text-secondary m-0">
                    Total:
                  </p>
                  <div className="d-flex flex-row fs-4">
                    <p className="fs-3 fw-bold mb-0">{item.total}</p>
                    <p className="fs-6 align-self-end mb-1"> €</p>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Pressupostos;
