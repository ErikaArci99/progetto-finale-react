import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Benvenuto!</h1>
            <p>Ciao utente! Esplora le nostre borse:</p>
            <Link to="/borse">Vai alle Borse</Link>
        </div>
    );
}

export default Home;
