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
        <div className="container mt-4 margin-bottom-footer">
            <h1 className="my-5 text-color">Lista Borse</h1>

            <div className="row g-4">
                {borse.map(b => (
                    <div key={b.id} className="col-md-6 col-lg-4">
                        <div className="card h-100 text-center shadow-sm position-relative">
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

                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{b.nome}</h5>
                                <p className="mb-1"><strong>Brand:</strong> {b.brand}</p>

                                <p className="mb-2">
                                    <strong>Prezzo: </strong>
                                    {b.sconto ? (
                                        <>
                                            <span className="text-muted text-decoration-line-through">€{b.prezzo}</span>{" "}
                                            <span className="text-danger">€{b.prezzoScontato}</span>
                                        </>
                                    ) : (
                                        <span>€{b.prezzo}</span>
                                    )}
                                </p>

                                <Link to={`/borse/${b.id}`} className="btn btn-outline-secondary btn-sm mt-auto d-inline-block">
                                    Dettagli
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListaBorse;
