import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Wishlist from './components/Wishlist';
import CarDetails from './pages/CarDetails';
import DarkModeToggle from './components/DarkModeToggle';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Car Finder</Link>
            <div className="d-flex gap-3">
              <Link className="btn btn-outline-primary" to="/">Home</Link>
              <Link className="btn btn-outline-success" to="/wishlist">Wishlist</Link>
            </div>
          </div>
        </nav>
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<Home onViewDetails={(car) => window.location.href = `/details?id=${car.id}`} />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/details" element={<CarDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;