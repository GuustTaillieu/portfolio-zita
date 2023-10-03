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
import cursor from './customCursor';
const LazyHomePage = React.lazy(() => import('./Pages/HomePage/HomePage'));
const LazyContactPage = React.lazy(
	() => import('./Pages/ContactPage/ContactPage')
);
const LazyProjectsPage = React.lazy(
	() => import('./Pages/ProjectsPage/ProjectsPage')
);
const LazyProjectPage = React.lazy(
	() => import('./Pages/ProjectPage/ProjectPage')
);

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
					<Route
						path='/'
						element={
							<React.Suspense>
								<LazyHomePage />
							</React.Suspense>
						}
					/>
					<Route
						path='/contact'
						element={
							<React.Suspense>
								<LazyContactPage />
							</React.Suspense>
						}
					/>
					<Route
						path='/projects'
						element={
							<React.Suspense>
								<LazyProjectsPage />
							</React.Suspense>
						}
					/>
					<Route
						path='/projects/:id'
						element={
							<React.Suspense>
								<LazyProjectPage />
							</React.Suspense>
						}
					/>
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;
