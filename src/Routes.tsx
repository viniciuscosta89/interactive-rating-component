import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";
import { AnimatePresence } from "framer-motion";

export function Router() {	
	return (
		<BrowserRouter>			
			<AnimatePresence exitBeforeEnter>
				<Routes>
					<Route path="/" element={<Home />} />					
					
					<Route path="/thank-you" element={<ThankYou />} />
				</Routes>
			</AnimatePresence>
		</BrowserRouter>
	)
}
