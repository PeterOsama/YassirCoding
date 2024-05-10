export default function setReservationsRoutes(server) {
  server.get('/reservations', (schema, request) => {
    const { date, status, shift, area, searchQuery } = request.queryParams;
    let reservations = schema.reservations.all();
    if (searchQuery) {
      // exact match
      // const fullName = `${reservation.customer.firstName} ${reservation.customer.lastName}`;
      // return fullName.toLowerCase().includes(searchQuery.toLowerCase());
      reservations = reservations.filter(
        (reservation) =>
          reservation.customer.firstName
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          reservation.customer.lastName
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      );
    }
    if (date) {
      reservations = reservations.filter(
        (reservation) => reservation.businessDate === date
      );
    }
    if (status) {
      const filteredStatus = status.split(',');
      reservations = reservations.filter((reservation) =>
        filteredStatus.includes(reservation.status)
      );
    }
    if (shift) {
      reservations = reservations.filter(
        (reservation) => reservation.shift === shift
      );
    }
    if (area) {
      const filteredArea = area.split(',');
      reservations = reservations.filter((reservation) =>
        filteredArea.includes(reservation.area)
      );
    }

    return reservations;
  });
}
