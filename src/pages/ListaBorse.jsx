import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ListaBorse() {
    const [borse, setBorse] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/borse")
            .then(res => setBorse(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Lista Borse</h1>
            <Link to="/">← Torna alla HomePage</Link>
            {borse.map(b => (
                <div key={b.id}>
                    <h2>{b.nome}</h2>
                    <p>Brand: {b.brand}</p>
                    <p>Collezione: {b.collezione ? b.collezione.nome : "Nessuna"}</p>
                    <p>Prezzo: €{b.prezzoScontato}</p>
                    <p>Sconto: {b.sconto ? b.sconto.percentuale + "%" : "Nessuno"}</p>
                    <Link to={`/borse/${b.id}`}>Dettagli</Link>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default ListaBorse;
