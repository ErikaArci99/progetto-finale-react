import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container mt-5 text-center">
            <h1 className="text-color">Benvenuto!</h1>
            <p className="lead">Ciao utente! Esplora le nostre borse:</p>
            <Link to="/borse" className="btn btn-outline-primary">Vai alle Borse</Link>
        </div>
    );
}

export default Home;
