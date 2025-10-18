import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function DettaglioBorsa() {
    const { id } = useParams(); // prende l'id dalla rotta
    const [borsa, setBorsa] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/borse/${id}`)
            .then(res => setBorsa(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!borsa) return <p>Caricamento...</p>;

    return (
        <div>
            <h1>{borsa.nome}</h1>
            <img src={borsa.immagine} alt={borsa.nome} />
            <p><strong>Brand:</strong> {borsa.brand}</p>
            <p><strong>Colore:</strong> {borsa.colore}</p>
            <p><strong>Dimensioni:</strong> {borsa.dimensioni}</p>
            <p><strong>Descrizione:</strong> {borsa.descrizione}</p>
            <p><strong>Collezione:</strong> {borsa.collezione ? borsa.collezione.nome : "Nessuna"}</p>
            <p><strong>Prezzo:</strong> €{borsa.prezzoScontato}</p>
            <p><strong>Sconto:</strong> {borsa.sconto ? borsa.sconto.percentuale + "%" : "Nessuno"}</p>
            <Link to="/borse">← Torna alla lista</Link>
        </div>
    );
}

export default DettaglioBorsa;
