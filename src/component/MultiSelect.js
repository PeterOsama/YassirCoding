import React from 'react';

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
