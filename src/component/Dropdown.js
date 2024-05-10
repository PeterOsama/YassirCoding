import React from 'react';

export const Dropdown = ({
  options,
  label,
  name,
  filter,
  handleFilterChange,
}) => {
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
