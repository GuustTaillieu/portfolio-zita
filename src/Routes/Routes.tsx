import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import App from '../App';
import Contact from '../Pages/Contacts/Contact';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
	},
]);
