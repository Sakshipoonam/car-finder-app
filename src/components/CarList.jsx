// src/components/CarList.jsx
import React from 'react';
import CarCard from './CarCard';

export default function CarList({ cars, onDetails, onWishlist }) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {cars.map((car) => (
        <div className="col" key={car.id}>
          <CarCard car={car} onDetails={onDetails} onWishlist={onWishlist} />
        </div>
      ))}
    </div>
  );
}
