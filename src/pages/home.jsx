import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="card p-3 d-flex flex-wrap flex-column align-items-center card m-1 border-0 shadow rounded-3"
      style={{ width: "30rem" }}
    >
      <h4>Benvinguts</h4>
      <p>
        Aqui podràs pressupostar els diferents serveis de creació d'una web:
        Seo, Ads, Web. Només has de seleccionar l'opció desitjada i especificar
        el número de pàgines i llenguatges en el cas que hagis seleccionat
        'Web'.
      </p>
      <p>
        Un cop seleccionats els serveis introdueix les teves dades per
        sol·licitar el teu pressupost.
      </p>

      <Link
        style={{ backgroundColor: "#50b78b", color: "white" }}
        className="btn"
        to="/buy"
      >
        Començar
      </Link>
    </div>
  );
};

export default Home;
