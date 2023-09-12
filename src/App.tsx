import { AnimatePresence } from 'framer-motion';
import Navigation from './Components/Navigation/Navigation';
import './styles/app.scss';
import './styles/transitions.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

function App() {
	const location = useLocation();

	return (
		<>
			<Navigation />
			<AnimatePresence mode='wait'>
				<Routes key={location.pathname} location={location}>
					<Route path='/' element={<Home />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;
