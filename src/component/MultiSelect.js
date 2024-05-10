import React from 'react';
import PropTypes from 'prop-types';

export const MultiSelect = ({
  options,
  label,
  name,
  filter,
  handleFilterChange,
}) => {
  return (
    <div>
      <label className="block font-semibold">{label}</label>
      <div className="flex flex-col">
        {options.map((option) => (
          <label key={option} className="inline-flex items-center mt-2">
            <input
              type="checkbox"
              name={name}
              value={option}
              checked={filter.includes(option)}
              onChange={handleFilterChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

MultiSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  filter: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default MultiSelect;
