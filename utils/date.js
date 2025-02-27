import { format } from 'date-fns';

export function getLastUpdatedDate() {
  return format(new Date(), 'MMMM dd, yyyy');
}