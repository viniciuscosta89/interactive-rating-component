import React from 'react';
import { Card } from './styles';
import Ratings from './styles/Ratings';

interface CardProps {
	children: React.ReactNode;
}

interface RatingsProps {
	children: React.ReactNode;
	onClick?: () => void;
}

export const CardComponent = ({ children, ...props }:CardProps) => {
	return (
		<Card {...props}>			
				{children}
		</Card>
	);
}

export const RatingsComponent = ({ children, onClick, ...props }:RatingsProps) => {
	return (
		<Ratings {...props}>
			{children}
		</Ratings>
	)
}
