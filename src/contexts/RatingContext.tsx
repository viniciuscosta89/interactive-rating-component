import { createContext, ReactNode, useEffect, useState } from "react";

type RatingContextProviderProps = {
  children: ReactNode
}

type RatingContextType = {
  rating: number,
  changeRating: (rating: number) => void
}

export const RatingContext = createContext({} as RatingContextType);

export function RatingContextProvider({ children }: RatingContextProviderProps) {
	const [rating, setRating] = useState(-1);	

	function changeRating (newRating: number) {
		setRating(newRating);
	}

	return (
		<RatingContext.Provider value={{ rating, changeRating }}>
			{children}
		</RatingContext.Provider>
	);

}
