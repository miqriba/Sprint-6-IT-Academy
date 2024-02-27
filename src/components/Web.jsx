import React from "react";
import { useContext } from "react";
import { MyContext } from "../Context";
import { ButtonRound } from "./Components.style";

function Web() {
  const {
    pags,
    llengs,
    setPags,
    setLlengs,
    totalWeb,
    setTotalWeb,
    setTotal,
    totalCards,
  } = useContext(MyContext);

  const updateTotalWeb = (a) => {
    setTotalWeb(a * 30);
    setTotal(totalCards + a * 30);
  };

  const updatePagsLlengs = (event) => {
    event.preventDefault();
    // id 0 correspon a pagines, 1 a llenguatges
    if (event.target.outerText == "+") {
      if (event.target.id == 0) {
        setPags(pags + 1);
        updateTotalWeb(pags + 1 + llengs);
      } else if (event.target.id == 1) {
        setLlengs(llengs + 1);
        updateTotalWeb(pags + llengs + 1);
      }
    } else if (event.target.outerText == "-") {
      if (event.target.id == 0) {
        if (pags > 0) {
          setPags(pags - 1);
          updateTotalWeb(pags - 1 + llengs);
        }
      } else if (event.target.id == 1) {
        if (llengs > 0) {
          setLlengs(llengs - 1);
          updateTotalWeb(pags + llengs - 1);
        }
      }
    }
  };

  const updatePags = (event) => {
    console.log(event.target);
    setPags(Number(event.target.value));
    setTotalWeb((llengs + pags) * 30);
    setTotal(totalCards + (llengs + pags) * 30);
  };
  const updateLlengs = (event) => {
    setLlengs(Number(event.target.value));
    setTotalWeb((llengs + pags) * 30);
    setTotal(totalCards + (llengs + pags) * 30);
  };
  return (
    <div className="d-flex m-3 flex-column align-items-end w-100">
      <div id="textCard" className="fw-bold me-1">
        Nombre de pàgines:{" "}
        <ButtonRound id="0" className="ms-1" onClick={updatePagsLlengs}>
          -
        </ButtonRound>
        <input
          onChange={updatePags}
          id="0"
          style={{
            width: "2rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
          type="number"
          className="ms-1 me-1"
          min="0"
          value={pags}
        />
        <ButtonRound id="0" onClick={updatePagsLlengs}>
          +
        </ButtonRound>
      </div>
      <div id="textCard" className="fw-bold m-1">
        Nombre de llenguatges:{" "}
        <ButtonRound id="1" className="ms-1" onClick={updatePagsLlengs}>
          -
        </ButtonRound>
        <input
          onChange={updateLlengs}
          id="1"
          style={{
            width: "2rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
          type="number"
          className="ms-1 me-1"
          min="0"
          value={llengs}
        />
        <ButtonRound id="1" onClick={updatePagsLlengs}>
          +
        </ButtonRound>
      </div>
    </div>
  );
}

export default Web;
