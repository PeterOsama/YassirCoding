# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How To start 

### `npm install`
### `npm start`
### Open http:localhost:3000 to view it in your browser



The codebase is written in JavaScript and prop-types,  could done in typescript.

## Display the reservations as a list:
	
- Depend on  mirageJs https://miragejs.com/ to be API Mocking Library instead of using JSON directly and also Filtration done inside mirageJs Routes 
- Assume the main details are (id, name, status, shift, Area, Date).

## Filter reservations:
Filter by date by selecting from the calendar and matching it with businessDate.
Filter by Status Can Select Multiple.
Filter by Area Can Select Multiple.
Filter by Shift can select one.
Have the ability to Reset the filter.

## Sort reservations:
Sort by and column (id, name, status, shift, Area, Date) just click on it for ascending and descending.
The user can sort by guest number and guest name - assumed guest number is customer-id 

## Search by name and surname

Search by name Resets Filter 
Can Filter search Results 
Search by name is searching by searchQuery in first and last name, not exact match 


            reservation.customer.firstName
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          reservation.customer.lastName
            .toLowerCase()
            .includes(searchQuery.toLowerCase())

	


# YassirCoding
