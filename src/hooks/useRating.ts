import { useContext } from 'react';
import { RatingContext } from '../contexts/RatingContext';

export function useRating() {
  const value = useContext(RatingContext);

  return value;
}
