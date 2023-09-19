import { motion } from 'framer-motion';
import { DefaultPageTransition } from '../../transitions';
import './Home.scss';
import ScrollNav from '../../Components/ScrollNav/ScrollNav';

type Props = {};

const Home = (props: Props) => {
	return (
		<DefaultPageTransition>
			<div className='home'>
				<ScrollNav />
			</div>
		</DefaultPageTransition>
	);
};

export default Home;
