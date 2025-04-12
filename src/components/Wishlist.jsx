import React, { useEffect, useState } from 'react';
import { getWishlist, removeFromWishlist } from '../utils/localStorage';
import CarCard from './CarCard';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setWishlist(getWishlist());
  }, []);

  const handleRemove = (id) => {
    removeFromWishlist(id);
    setWishlist(getWishlist());
  };

  return (
    <div className="container mt-4">
      <h2>My Wishlist</h2>
      <div className="d-flex flex-wrap">
        {wishlist.length ? wishlist.map(car => (
          <CarCard key={car.id} car={car} onDetails={() => {}} onWishlist={() => handleRemove(car.id)} />
        )) : <p>No items in wishlist</p>}
      </div>
    </div>
  );
}
