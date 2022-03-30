import Button from '../components/Button';
import {Card, Header, Main, Ratings } from '../components/Card';
import IconStar from '../assets/icon-star.svg?component';
import { Link } from 'react-router-dom';
import { useRating } from '../hooks/useRating';
import AnimatedPage from '../components/AnimatedPage';

const Home = () => {
	const { rating, changeRating } = useRating();

	const ratingNumbers = [
		{ id: 1, value: 1 }, 
		{ id: 2, value: 2 },
		{ id: 3, value: 3 },
		{ id: 4, value: 4 },
		{ id: 5, value: 5 }
	]

	return (		
		<AnimatedPage>
			<Card>
				<Header>
					<div className="card__icon-wrapper">
						<IconStar className="card__icon" />
					</div>
				</Header>
				<Main>
					<h1>How did we do?</h1>
					<p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

					<Ratings>
						{ratingNumbers.map(item => 
							<button 
								key={item.id}
								onClick={() => changeRating(item.id)}
								className={ rating === item.id ? 'active': ''}>
									{item.value}
							</button>
						)}
					</Ratings>			

					<Link to="/thank-you">
						<Button variant="primary">Submit</Button>
					</Link>
				</Main>				
			</Card>
		</AnimatedPage>
	)
}

export default Home;
