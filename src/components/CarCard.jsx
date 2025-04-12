import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CarCard({ car, onDetails, onWishlist }) {
  const navigate = useNavigate();

  const handleView = () => {
    navigate('/details', { state: { car } });
  };

  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      <img src={car.image} className="card-img-top" alt={car.name} style={{ height: '180px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{car.name}</h5>
        <p className="card-text">Brand: {car.brand}</p>
        <p className="card-text">Fuel: {car.fuel}</p>
        <p className="card-text">Seats: {car.seats}</p>
        <p className="card-text">${car.price.toLocaleString()}</p>
        <button className="btn btn-primary me-2" onClick={handleView}>View</button>
        <button className="btn btn-outline-warning" onClick={() => onWishlist(car)}>❤️ Wishlist</button>
      </div>
    </div>
  );
}