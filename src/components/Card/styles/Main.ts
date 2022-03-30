import styled from "styled-components";

const Main = styled.main`
	display: flex;
	flex-direction: column;
	
	> p {		
		line-height: 2;
		opacity: 0.5;
		margin-bottom: 2rem;
	}

	h1 {
		font-size: var(--fz-xxl);
		font-weight: 500;
		margin-bottom: 1rem;
	}

	.results {
		background-color: rgb(255 255 255 / 0.1);
		border-radius: 2rem;
		color: var(--primary);
		display: inline-flex;
		align-self: center;
		font-weight: 500;
		padding: 0.75rem 1.25rem;
		line-height: normal;
		margin-bottom: 2rem;
	}
`

export default Main;
