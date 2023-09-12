import { Outlet } from 'react-router';
import Navigation from './Components/Navigation/Navigation';
import './styles/app.scss';

function App() {
	return (
		<>
			<Navigation />
			<Outlet />
		</>
	);
}

export default App;
