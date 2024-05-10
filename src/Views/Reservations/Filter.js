import React from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MultiSelect from '../../component/MultiSelect';
import {
  shiftsOptions,
  areaOptions,
  statusOptions,
} from '../../constants/filterOptions';
import Dropdown from '../../component/Dropdown';
import { IoIosRefreshCircle } from 'react-icons/io';
const Filter = ({
  filters,
  setFilters,
  handleDateChange,
  handleFilterChange,
}) => {
  return (
    <div className="mb-4 border-r border-gray-200">
      <div className="grid grid-cols-1  gap-4 px-3 mt-5">
        <div>
          <Calendar
            id="dateFilter"
            onChange={handleDateChange}
            value={filters.date}
            className="border border-gray-300 rounded-md p-2 w-full"
            defaultActiveStartDate={new Date(2024, 7, 1)}
          />
        </div>
        <MultiSelect
          options={statusOptions}
          label="Status"
          name="status"
          filter={filters.status}
          handleFilterChange={handleFilterChange}
        />
        <MultiSelect
          options={areaOptions}
          label="Area"
          name="area"
          filter={filters.area}
          handleFilterChange={handleFilterChange}
        />
        <Dropdown
          options={shiftsOptions}
          label="Shift"
          name="shift"
          filter={filters.shift}
          handleFilterChange={handleFilterChange}
        />
        <div
          className=" flex items-center gap-0.5 cursor-pointer text-base text-red-600"
          onClick={() =>
            setFilters({
              date: '',
              status: [],
              shift: '',
              area: '',
            })
          }
        >
          {' '}
          <IoIosRefreshCircle /> Reset Filter
        </div>
      </div>
    </div>
  );
};

Filter.propTypes = {
  filters: PropTypes.shape({
    shift: PropTypes.string,
    area: PropTypes.arrayOf(PropTypes.string),
    status: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.string,
  }).isRequired,
  setFilters: PropTypes.func.isRequired,
  handleDateChange: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
