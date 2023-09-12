import './Navigation.scss';
import { Link } from 'react-router-dom';

type Props = {};

const Navigation = (props: Props) => {
	return (
		<nav>
			<Link to='/'>
				<h1>Zita Worm</h1>
			</Link>
			<Link to='/contact'>
				<h2>Contact</h2>
			</Link>
		</nav>
	);
};

export default Navigation;
