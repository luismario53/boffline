import React, { useState, useEffect, lazy, Suspense } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Inicio = lazy(() => import('./Inicio'));
const Usuarios = lazy(() => import('./Inicio'));
const Peliculas = lazy(() => import('./Inicio'));
const Libros = lazy(() => import('./Inicio'));


const Navbar = () => {
  return (
    <header>
      <Router>
        <Suspense fallback={<div>Cargando...</div>}>
          <ListGroup className="w-100">
            <Link className="text-decoration-none text-secondary" to="/">
              <ListGroup.Item>
                Inicio
              </ListGroup.Item>
            </Link>
            <Link className="text-decoration-none text-secondary" to="/usuarios">
              <ListGroup.Item>
                Usuarios
              </ListGroup.Item>
            </Link>
            <Link className="text-decoration-none text-secondary" to="/peliculas">
              <ListGroup.Item>
                Películas
              </ListGroup.Item>
            </Link>
            <Link className="text-decoration-none text-secondary" to="/libros">
              <ListGroup.Item>
                Libros
              </ListGroup.Item>
            </Link>
          </ListGroup>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/peliculas" element={<Peliculas />} />
            <Route path="/libros" element={<Libros />} />
          </Routes>
        </Suspense>
      </Router>
    </header>
  );
}

export default Navbar;