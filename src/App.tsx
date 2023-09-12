import { Outlet } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import Navigation from './Components/Navigation/Navigation';
import './styles/app.scss';
import './styles/transitions.scss';

function App() {
	return (
		<>
			<Navigation />
			<AnimatePresence mode='wait'>
				<Outlet />
			</AnimatePresence>
		</>
	);
}

export default App;
