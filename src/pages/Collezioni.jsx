import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Collezioni() {
    const [borse, setBorse] = useState([]);
    const [selectedCollezione, setSelectedCollezione] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/api/borse")
            .then(res => setBorse(res.data))
            .catch(err => console.error(err));
    }, []);

    // Trova tutte le collezioni uniche
    const collezioniUniche = [...new Set(borse.map(b => b.collezione ? b.collezione.nome : null))].filter(Boolean);

    // Filtra le borse per collezione selezionata
    const borseDaMostrare = selectedCollezione
        ? borse.filter(b => b.collezione && b.collezione.nome === selectedCollezione)
        : [];

    return (
        <div className="container mt-5 text-center">
            <h1 className="mb-4 text-color">Scegli la collezione da visualizzare</h1>

            {/* BOTTONI COLLEZIONI */}
            <div className="d-flex flex-wrap justify-content-center mb-4 gap-3">
                {collezioniUniche.map(col => (
                    <button
                        key={col}
                        className="btn btn-outline-primary"
                        onClick={() => setSelectedCollezione(col)}
                    >
                        {col}
                    </button>
                ))}
            </div>

            {/* BORSE DELLA COLLEZIONE SELEZIONATA */}
            {selectedCollezione && (
                <div className="row g-4 margin-bottom-footer">
                    {borseDaMostrare.map(b => (
                        <div key={b.id} className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-sm position-relative">
                                {b.collezione && (
                                    <span className="badge badge-collection">{b.collezione.nome}</span>
                                )}
                                {b.sconto && (
                                    <span className="badge badge-discount">{b.sconto.percentuale}% OFF</span>
                                )}
                                <div className="card-img-top card-image-wrapper">
                                    <img src={b.immagine} alt={b.nome} className="card-image" />
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{b.nome}</h5>
                                    <p className="mb-1"><strong>Brand:</strong> {b.brand}</p>
                                    <p className="mb-1">
                                        <strong>Prezzo:</strong>{" "}
                                        {b.sconto ? (
                                            <>
                                                <span className="text-muted text-decoration-line-through">€{b.prezzo}</span>{" "}
                                                <span className="text-danger">€{b.prezzoScontato}</span>
                                            </>
                                        ) : (
                                            <span>€{b.prezzo}</span>
                                        )}
                                    </p>
                                    <Link to={`/borse/${b.id}`} className="btn btn-outline-secondary mt-auto">
                                        Dettagli
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Collezioni;
