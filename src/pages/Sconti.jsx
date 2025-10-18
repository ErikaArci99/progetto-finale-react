import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Sconti() {
    const [borse, setBorse] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/borse")
            .then(res => {
                // filtriamo solo le borse che hanno uno sconto
                const borseScontate = res.data.filter(b => b.sconto !== null);
                setBorse(borseScontate);
            })
            .catch(err => console.error(err));
    }, []);

    if (borse.length === 0) return <p className="mt-4 text-center">Nessuna borsa scontata disponibile.</p>;

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-color">Borse in Sconto</h1>
            <div className="row g-4">
                {borse.map(b => (
                    <div key={b.id} className="col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm position-relative">
                            {/* BADGE COLLEZIONE E SCONTO */}
                            {b.collezione && (
                                <span className="badge badge-collection">{b.collezione.nome}</span>
                            )}
                            {b.sconto && (
                                <span className="badge badge-discount">{b.sconto.percentuale}% OFF</span>
                            )}

                            {/* IMMAGINE */}
                            <div className="card-img-top card-image-wrapper">
                                <img src={b.immagine} alt={b.nome} className="card-image" />
                            </div>

                            {/* CONTENUTO CARD */}
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{b.nome}</h5>
                                <p className="mb-1"><strong>Brand:</strong> {b.brand}</p>
                                <p className="mb-1">
                                    <strong>Prezzo:</strong>{" "}
                                    <span className="text-muted text-decoration-line-through">€{b.prezzo}</span>{" "}
                                    <span className="text-danger">€{b.prezzoScontato}</span>
                                </p>
                                <Link to={`/borse/${b.id}`} className="btn btn-outline-secondary mt-auto">Dettagli</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sconti;
