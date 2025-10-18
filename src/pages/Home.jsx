import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container mt-5 text-center">
            <h1 className="text-color">Benvenuto su Borse Luxury!</h1>
            <p className="lead fw-bold mt-5 text-secondary">Esplora le nostre borse:</p>
            <Link to="/borse" className="btn btn-lg btn-outline-primary margin-bottom-footer">Vai alle Borse</Link>
            <p className="lead mt-1">Oppure:</p>
            <Link to="/collezioni" className="btn btn-outline-primary mx-3">Vedi le nostre collezioni</Link>
            <Link to="/sconti" className="btn btn-outline-primary mx-3">Vai alle Borse in sconto</Link>
        </div>
    );
}

export default Home;
