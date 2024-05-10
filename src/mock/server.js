import { createServer, Model, Factory } from 'miragejs';
import { reservationsData } from './factories/ReservationsData';
import setReservationsRoutes from './routes/Reservations';
export function makeServer() {
  let server = createServer({
    models: {
      reservation: Model,
    },

    factories: {
      reservation: Factory.extend({}),
    },
    seeds(server) {
      reservationsData.forEach((reservationData) => {
        server.create('reservation', reservationData);
      });
    },
    routes() {
      this.namespace = 'api';
    },
  });
  setReservationsRoutes(server);
  return server;
}
