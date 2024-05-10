import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ options, label, name, filter, handleFilterChange }) => {
  return (
    <div>
      <label htmlFor={`${name} Filter`} className="block font-semibold">
        {label}
      </label>
      <select
        id={`${name} Filter`}
        name={name}
        value={filter}
        onChange={handleFilterChange}
        className="border border-gray-300 rounded-md px-2 py-1 w-full"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Dropdown;
