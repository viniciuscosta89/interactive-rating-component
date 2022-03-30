import styled from "styled-components";
import { motion } from "framer-motion"

export const Card = styled(motion.div)`
		position: relative;
		background: linear-gradient(to bottom, #232a34 0%, #171e28 100%);
		border-radius: 2rem;
		color: #fff;
		display: flex;
		flex-direction: column;
		padding: 2rem;	
		max-width: 415px;

		.card {			
			&__icon-wrapper {
				background-color: rgb(255 255 255 / 0.1);
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 3rem;	
				height: 3rem;			
			}

			&__icon {				
				fill: var(--primary);

				> path {
					fill: inherit;
				}
			}

			&__illustration {
				margin-left: auto;
				margin-right: auto;
			}
		}
`;
