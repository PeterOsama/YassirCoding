import { format } from 'date-fns';

export const getQueryParams = (filters) => {
  if (filters.date) filters.date = format(filters.date, 'dd.MM.yyyy');

  const queryString = Object.keys(filters)
    .map((key) => key && `${key}=${encodeURIComponent(filters[key])}`)
    .join('&');
  return queryString;
};
