import React from 'react';
import { useLocation } from 'react-router-dom';

export default function CarDetails() {
  const { state } = useLocation();
  const car = state?.car;

  if (!car) return <p className="text-center">Select a car to view details.</p>;

  return (
    <div className="container mt-4">
      <h2>{car.name}</h2>
      <img src={car.image} alt={car.name} className="img-fluid mb-3" style={{ maxHeight: '400px' }} />
      <p><strong>Brand:</strong> {car.brand}</p>
      <p><strong>Fuel Type:</strong> {car.fuel}</p>
      <p><strong>Seating Capacity:</strong> {car.seats}</p>
      <p><strong>Price:</strong> ${car.price.toLocaleString()}</p>
    </div>
  );
}