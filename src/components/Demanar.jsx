import React, { useState, useContext } from "react";
import { InputGrey } from "./Components.style";
import { MyContext, PresContext } from "../pages/Context";

const Demanar = ({ items }) => {
  const { pags, llengs, total, selected, discount } = useContext(MyContext);
  const { pressupostos, setPressupostos } = useContext(PresContext);

  const [formData, setFormData] = useState({
    nom: "",
    telefon: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const today = new Date();
    setPressupostos([
      ...pressupostos,
      {
        nom: formData.nom,
        telefon: formData.telefon,
        email: formData.email,

        serveis: [
          ...items
            .filter((currValue, index) => selected[index] === true)
            .map((element, index) => {
              return element.title === "Web"
                ? `${element.title} (${pags} pàgines, ${llengs} llenguatges)`
                : element.title;
            }),
        ],
        data: today,
        pags,
        llengs,
        total: discount ? total * 0.8 : total,
      },
    ]);
    console.log(pressupostos);
    setFormData({
      nom: "",
      telefon: "",
      email: "",
    });
  };

  return (
    <PresContext.Provider value={pressupostos}>
      <div
        className="d-flex card m-1 border-0 shadow rounded-3"
        style={{ width: "30rem" }}
      >
        <div className="card-body">
          <h5 className="card-title fw-bold">Demanar pressupost</h5>
          <form
            onSubmit={handleSubmit}
            style={{ width: "100%", boxSizing: "content-box" }}
            className="d-flex flex-row justify-content-between"
          >
            <div className="d-flex flex-row justify-content-between">
              <InputGrey
                value={formData.nom}
                type="name"
                name="nom"
                placeholder="Nom"
                onChange={handleChange}
              ></InputGrey>
              <InputGrey
                value={formData.telefon}
                type="tel"
                name="telefon"
                placeholder="Telèfon"
                onChange={handleChange}
              ></InputGrey>
              <InputGrey
                value={formData.email}
                name="email"
                placeholder="Email"
                onChange={handleChange}
              ></InputGrey>
            </div>
            <button
              type="submit"
              placeholder="asdfa"
              style={{
                backgroundColor: "#50b78b",
                color: "white",
                whiteSpace: "nowrap",
                fontSize: "12px",
              }}
              className="btn"
              to="/buy"
            >
              Sol·licitar pressupost
            </button>
            {/* </form> */}
          </form>
        </div>
      </div>
    </PresContext.Provider>
  );
};

export default Demanar;
