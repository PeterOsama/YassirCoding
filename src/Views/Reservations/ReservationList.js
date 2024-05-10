import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const ReservationList = ({ reservations }) => {
  const [sortedReservations, setSortedReservations] = useState(reservations);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'ascending',
  });

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  useEffect(() => {
    if (sortConfig.key) {
      const sortedReservations = [...reservations].sort((a, b) => {
        let aTemp;
        let bTemp;
        if (sortConfig.key === 'customer.firstName') {
          aTemp = a['customer'].firstName;
          bTemp = b['customer'].firstName;
        } else if (sortConfig.key === 'id') {
          aTemp = parseInt(a[sortConfig.key]);
          bTemp = parseInt(b[sortConfig.key]);
        } else {
          aTemp = a[sortConfig.key];
          bTemp = b[sortConfig.key];
        }
        if (sortConfig.direction === 'ascending') {
          return aTemp > bTemp ? 1 : -1;
          // return aTemp.localeCompare(bTemp);
        } else {
          return aTemp < bTemp ? 1 : -1;
        }
      });
      setSortedReservations(sortedReservations);
    } else {
      setSortedReservations(reservations);
    }
  }, [sortConfig]);

  useEffect(() => {
    setSortConfig({
      key: null,
      direction: 'ascending',
    });
  }, [reservations]);

  return (
    <>
      <p className="text-gray-600 text-sm py-1">
        {' '}
        clicking on any column sorts the column ascending and descending
      </p>
      <table className="w-full border-collapse border border-gray-200 px-3">
        <thead>
          <tr className="bg-gray-100">
            <th
              className="border border-gray-200 p-2"
              onClick={() => handleSort('id')}
            >
              <span className="flex justify-between items-center">
                Reservation ID
                {sortConfig.key === 'id' &&
                  (sortConfig.direction === 'ascending' ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  ))}
              </span>
            </th>
            <th
              className="border border-gray-200 p-2"
              onClick={() => handleSort('customer.firstName')}
            >
              {' '}
              <span className="flex justify-between items-center">
                Customer Name{' '}
                {sortConfig.key === 'customer.firstName' &&
                  (sortConfig.direction === 'ascending' ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  ))}
              </span>
            </th>
            <th
              className="border border-gray-200 p-2"
              onClick={() => handleSort('status')}
            >
              <span className="flex justify-between items-center">
                Status
                {sortConfig.key === 'status' &&
                  (sortConfig.direction === 'ascending' ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  ))}
              </span>
            </th>
            <th
              className="border border-gray-200 p-2"
              onClick={() => handleSort('shift')}
            >
              <span className="flex justify-between items-center">
                Shift{' '}
                {sortConfig.key === 'shift' &&
                  (sortConfig.direction === 'ascending' ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  ))}
              </span>
            </th>
            <th
              className="border border-gray-200 p-2"
              onClick={() => handleSort('area')}
            >
              <span className="flex justify-between items-center">
                Area{' '}
                {sortConfig.key === 'area' &&
                  (sortConfig.direction === 'ascending' ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  ))}
              </span>
            </th>
            <th
              className="border border-gray-200 p-2"
              onClick={() => handleSort('businessDate')}
            >
              <span className="flex justify-between items-center">
                Date
                {sortConfig.key === 'businessDate' &&
                  (sortConfig.direction === 'ascending' ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  ))}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedReservations.map((reservation) => (
            <tr key={reservation.id} className="border border-gray-200">
              <td className="border border-gray-200 p-2">{reservation.id}</td>
              <td className="border border-gray-200 p-2">
                {reservation.customer.firstName} {reservation.customer.lastName}
              </td>
              <td className="border border-gray-200 p-2">
                {reservation.status}
              </td>
              <td className="border border-gray-200 p-2">
                {reservation.shift}
              </td>
              <td className="border border-gray-200 p-2">{reservation.area}</td>
              <td className="border border-gray-200 p-2">
                {reservation.businessDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

ReservationList.propTypes = {
  reservations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      businessDate: PropTypes.string,
      area: PropTypes.string,
      status: PropTypes.string,
      date: PropTypes.string,
      shift: PropTypes.string,
      lastName: PropTypes.string,
      firstName: PropTypes.string,
    })
  ).isRequired,
};

export default ReservationList;
