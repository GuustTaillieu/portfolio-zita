import { AnimatePresence } from 'framer-motion';
import Navigation from './Components/TopNav/TopNav';
import './styles/app.scss';
import './styles/transitions.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';

function App() {
	const location = useLocation();

	return (
		<AnimatePresence mode='wait'>
			<Navigation />
			<Routes key={location.pathname} location={location}>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</AnimatePresence>
	);
}

export default App;
