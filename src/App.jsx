import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListaBorse from "./pages/ListaBorse";
import DettaglioBorsa from "./pages/DettaglioBorsa";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Sconti from "./pages/Sconti";
import Collezioni from "./pages/Collezioni";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/borse" element={<ListaBorse />} />
                <Route path="/borse/:id" element={<DettaglioBorsa />} />
                <Route path="/sconti" element={<Sconti />} />
                <Route path="/collezioni" element={<Collezioni />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
