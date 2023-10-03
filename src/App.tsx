import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from './Components/TopNav/TopNav';
import './styles/app.scss';
import './styles/transitions.scss';
import {
	Route,
	BrowserRouter as Router,
	Routes,
	useLocation,
} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ContactPage from './Pages/ContactPage/ContactPage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import ProjectPage from './Pages/ProjectPage/ProjectPage';
import cursor from './customCursor';

function App() {
	return (
		<Router>
			<AppRoutes />
		</Router>
	);
}

function AppRoutes() {
	const location = useLocation();

	useEffect(() => {
		cursor.destroy();
		cursor.init();
	}, [location.pathname]);

	return (
		<>
			<Navigation />
			<AnimatePresence initial={false} mode='wait'>
				<Routes location={location} key={location.hash}>
					<Route path='/' element={<HomePage />} />
					<Route path='/contact' element={<ContactPage />} />
					<Route path='/projects' element={<ProjectsPage />} />
					<Route path='/projects/:id' element={<ProjectPage />} />
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;
