import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import classes from './Header.module.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const categories = [
    'All',
    'electronics',
    "men's clothing",
    "women's clothing",
    'jewelery'
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      if (selectedCategory === 'All') {
        navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      } else {
        navigate(`/category/${selectedCategory}?search=${encodeURIComponent(searchTerm)}`);
      }
    }
  };

  return (
    <form className={classes.search} onSubmit={handleSearch}>
      <select 
        value={selectedCategory} 
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map(category => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
      <input 
        type="text" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Amazon"
      />
      <button type="submit">
        <BsSearch size={38} />
      </button>
    </form>
  );
};

export default SearchBar;