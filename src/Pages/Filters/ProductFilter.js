import React, { useState } from 'react';
import './filter.module.css';

const ProductFilter = (props) => {
  const { products, onFilter } = props;
  const [sortOption, setSortOption] = useState('nameLowToHigh'); 

  const filterProducts = (sortOption) => {
    const sortedProducts = [...products];  // Create a new array to avoid mutating original array
    if (sortOption === 'nameLowToHigh') {
      sortedProducts.sort((a, b) => a.product.name.localeCompare(b.product.name));
    } else if (sortOption === 'nameHighToLow') {
      sortedProducts.sort((a, b) => b.product.name.localeCompare(a.product.name));
    } else if (sortOption === 'priceLowToHigh') {
      sortedProducts.sort((a, b) => a.product.price - b.product.price);
    } else if (sortOption === 'priceHighToLow') {
      sortedProducts.sort((a, b) => b.product.price - a.product.price);
    }
    return sortedProducts;
  };

  const handleSortChange = (event) => {
    const selectedSortOption = event.target.value;
    setSortOption(selectedSortOption);
    const filteredProducts = filterProducts(selectedSortOption);
    onFilter(filteredProducts);
  };

  return (
    <div>
      <label>
        Sort By:
        <select value={sortOption} onChange={handleSortChange}>
          <option value="nameLowToHigh">Name (A-Z)</option>
          <option value="nameHighToLow">Name (Z-A)</option>
          <option value="priceLowToHigh">Price (Low to High)</option>
          <option value="priceHighToLow">Price (High to Low)</option>
        </select>
      </label>
    </div>
  );
};

export default ProductFilter;
