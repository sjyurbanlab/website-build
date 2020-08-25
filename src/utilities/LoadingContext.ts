import { createContext } from 'react';

export type Loading = {
  isLoading: boolean;
}

export const defaultLoading: Loading = {
  isLoading: true
}

export const LoadingContext = createContext<Loading>(defaultLoading);
