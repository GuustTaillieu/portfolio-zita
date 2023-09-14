import { motion } from 'framer-motion';
import { PageTransition } from '../../transitions';
import './Home.scss';
import ScrollNav from '../../Components/ScrollNav/ScrollNav';

type Props = {};

const Home = (props: Props) => {
	return (
		<PageTransition>
			<div className='home'>
				<ScrollNav />
			</div>
		</PageTransition>
	);
};

export default Home;
