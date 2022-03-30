import { useRating } from '../hooks/useRating';
import {Card, Header, Main } from '../components/Card';
import IllustrationThankYou from '../assets/illustration-thank-you.svg?component';
import AnimatedPage from '../components/AnimatedPage';

const ThankYou = () => {
	const { rating } = useRating();

	return (	
		<AnimatedPage>
			<Card>
				<Header>
					<IllustrationThankYou className="card__illustration" />
				</Header>
				<Main style={{ textAlign: 'center' }}>
					<div className="results">
						You selected {rating === -1 ? '0' : rating} out of 5
					</div>
					<h1>Thank you!</h1>
					<p>We apprecitate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
				</Main>				
			</Card>
		</AnimatedPage>	
	)
}

export default ThankYou;

