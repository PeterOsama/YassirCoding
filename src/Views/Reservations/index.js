import React, { useState, useEffect, useRef } from 'react';
import ReservationList from './ReservationList';
import Filter from './Filter';
import { getQueryParams } from '../../utils/api';
import SearchBar from '../../component/SearchBar';

const ReservationContainer = () => {
  const [reservations, setReservations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    date: '',
    status: [],
    shift: '',
    area: [],
  });
  const searchBarInputTimeout = useRef(null);

  useEffect(() => {
    const apiUrl = '/api/reservations';
    let queryParams = { ...filters, searchQuery: searchQuery };
    let queryString = getQueryParams(queryParams);
    const urlWithParams = `${apiUrl}?${queryString}`;
    fetchReservations(urlWithParams);
  }, [filters]);

  const fetchReservations = async (url = 'api/reservations') => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setReservations(data.reservations);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(name);
    if (type === 'checkbox') {
      const updatedStatus = checked
        ? [...filters[name], value]
        : filters[name].filter((name) => name !== value);
      setFilters((prevFilters) => ({
        ...prevFilters,
        [[name]]: updatedStatus,
      }));
    } else {
      setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    }
  };

  const handleDateChange = (date) => {
    setFilters((prevFilters) => ({ ...prevFilters, date }));
  };

  const handleSerachInputChange = () => {
    // asuming search should reset filter and have the ability to filter the search
    setFilters({
      date: '',
      status: [],
      shift: '',
      area: [],
    });
  };

  const handleSearchBarInputChange = (event) => {
    const { value } = event.target;

    setSearchQuery(value);

    if (searchBarInputTimeout.current)
      clearTimeout(searchBarInputTimeout.current);

    searchBarInputTimeout.current = setTimeout(() => {
      clearTimeout(searchBarInputTimeout.current);

      handleSerachInputChange();
    }, 500);
  };

  return (
    <div className="container flex mx-auto py-6 w-11/12">
      <Filter
        handleFilterChange={handleFilterChange}
        filters={filters}
        setFilters={setFilters}
        handleDateChange={handleDateChange}
      />
      <div className="container mx-auto py-6 px-3">
        <h1 className="text-3xl font-bold mb-4">Reservations List</h1>
        <SearchBar
          handleSearchChange={handleSearchBarInputChange}
          searchQuery={searchQuery}
        />
        <ReservationList reservations={reservations} />
      </div>
    </div>
  );
};

export default ReservationContainer;
