// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { fetchCars } from '../api/cars';
import CarFilters from '../components/CarFilters';
import CarList from '../components/CarList';
import { addToWishlist } from '../utils/localStorage';
import Spinner from 'react-bootstrap/Spinner'; // Importing Bootstrap spinner

export default function Home({ onViewDetails }) {
  const [filters, setFilters] = useState({});
  const [allCars, setAllCars] = useState([]); // Store all cars
  const [filteredCars, setFilteredCars] = useState([]); // Store filtered cars based on search
  const [search, setSearch] = useState(""); // Search value
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    setLoading(true); // Start loading
    fetchCars({ ...filters }).then((fetchedCars) => {
      setAllCars(fetchedCars); // Store all cars in state
      setFilteredCars(fetchedCars); // Initially show all cars
      setLoading(false); // Stop loading after data is fetched
    });
  }, [filters]);

  // Handle search input and filter the cars
  useEffect(() => {
    if (search === "") {
      setFilteredCars(allCars); // If no search, show all cars
    } else {
      const searchResult = allCars.filter((car) =>
        car.brand.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredCars(searchResult); // Update filtered cars based on search
    }
  }, [search, allCars]); // Runs whenever search or allCars change

  const updateFilter = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by brand..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Update search on change
        />
      </div>
      <CarFilters filters={filters} onChange={updateFilter} onSortChange={(value) => updateFilter('sort', value)} />
      
      {/* Loading Spinner */}
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <CarList cars={filteredCars} onDetails={onViewDetails} onWishlist={addToWishlist} />
      )}
    </div>
  );
}
