import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import PropTypes from 'prop-types';

export const SearchBar = ({ searchQuery, handleSearchChange }) => {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Search by first name or last name"
        value={searchQuery}
        onChange={handleSearchChange}
        className="border border-gray-300 rounded-md px-4 py-2 w-full pl-10"
      />
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <IoIosSearch className="text-gray-400" />
      </span>
    </div>
  );
};

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;
