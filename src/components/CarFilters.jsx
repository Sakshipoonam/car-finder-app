import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CarFilters({ filters, onChange, onSortChange }) {
  return (
    <div className="d-flex flex-wrap gap-3 mb-4 align-items-center">
      <input type="text" className="form-control" placeholder="Brand" onChange={(e) => onChange('brand', e.target.value)} style={{ maxWidth: '200px' }} />
      <select className="form-select" onChange={(e) => onChange('fuel', e.target.value)} style={{ maxWidth: '200px' }}>
        <option value="">All Fuel Types</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="Electric">Electric</option>
      </select>
      <input type="number" className="form-control" placeholder="Min Price" onChange={(e) => onChange('minPrice', Number(e.target.value))} style={{ maxWidth: '200px' }} />
      <input type="number" className="form-control" placeholder="Max Price" onChange={(e) => onChange('maxPrice', Number(e.target.value))} style={{ maxWidth: '200px' }} />
      <select className="form-select" onChange={(e) => onSortChange(e.target.value)} style={{ maxWidth: '200px' }}>
        <option value="">Sort</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    </div>
  );
}