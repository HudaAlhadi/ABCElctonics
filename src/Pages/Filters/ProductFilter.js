import React, { useState } from 'react';
import './filter.module.css'
const ProductFilter = (props) => {
  const { products } = props;
  const [sortOption, setSortOption] = useState('nameLowToHigh'); 

  const filterProducts = (sortOption) => {
    // Sorting
    const sortedProducts = [...products];
    if (sortOption === 'nameLowToHigh') {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'nameHighToLow') {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === 'priceLowToHigh') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceHighToLow') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    return sortedProducts;
  };

  const handleSortChange = (event) => {
    const selectedSortOption = event.target.value;
    setSortOption(selectedSortOption);
    const filteredProducts = filterProducts(selectedSortOption);
    
    props.onFilter(filteredProducts)
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
