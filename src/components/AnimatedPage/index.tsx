import { motion } from "framer-motion";
import { ReactNode } from "react";

const animations = {
	initial: { opacity: 0, y: -100 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 100 }
}

type AnimatedPageProps = {
	children: ReactNode
}

const AnimatedPage = ({ children }: AnimatedPageProps) => {
	return (
		<motion.div 
			variants={animations} 
			initial="initial" 
			animate="animate" 
			exit="exit"
		>
			{children}
		</motion.div>
	)
}

export default AnimatedPage;
