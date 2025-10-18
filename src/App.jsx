import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListaBorse from "./pages/ListaBorse";
import DettaglioBorsa from "./pages/DettaglioBorsa";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/borse" element={<ListaBorse />} />
                <Route path="/borse/:id" element={<DettaglioBorsa />} />
            </Routes>
        </Router>
    );
}

export default App;
