import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function DettaglioBorsa() {
    const { id } = useParams();
    const [borsa, setBorsa] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/borse/${id}`)
            .then(res => setBorsa(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!borsa) return <p>Caricamento...</p>;

    return (
        <div className="detail-page-wrapper">
            <div className="container">
                <div className="row g-5 align-items-center">
                    {/* IMMAGINE */}
                    <div className="col-md-6 position-relative text-center">
                        {borsa.collezione && (
                            <span className="badge badge-collection">{borsa.collezione.nome}</span>
                        )}
                        {borsa.sconto && (
                            <span className="badge badge-discount">{borsa.sconto.percentuale}% OFF</span>
                        )}
                        <img src={borsa.immagine} alt={borsa.nome} className="img-fluid detail-image rounded" />
                    </div>

                    {/* INFO PRODOTTO */}
                    <div className="col-md-6 detail-info">
                        <h1 className="mb-3 text-color">{borsa.nome}</h1>
                        <p className="mb-2"><strong>Brand:</strong> {borsa.brand}</p>
                        <p className="mb-2"><strong>Colore:</strong> {borsa.colore}</p>
                        <p className="mb-2"><strong>Dimensioni:</strong> {borsa.dimensioni}</p>
                        <p className="mb-4">{borsa.descrizione}</p>

                        <p className="fs-4">
                            {borsa.sconto ? (
                                <>
                                    <span className="text-muted text-decoration-line-through me-2">€{borsa.prezzo}</span>
                                    <span className="text-danger">€{borsa.prezzoScontato}</span>
                                </>
                            ) : (
                                <span>€{borsa.prezzo}</span>
                            )}
                        </p>

                        <Link to="/borse" className="btn btn-outline-secondary mt-3">← Torna alla lista</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DettaglioBorsa;
