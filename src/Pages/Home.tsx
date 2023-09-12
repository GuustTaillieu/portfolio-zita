import { motion } from 'framer-motion';
import { PageTransition } from '../transitions';

type Props = {};

const Home = (props: Props) => {
	return (
		<PageTransition>
			<div className='home'>
				<h2>Home</h2>
			</div>
		</PageTransition>
	);
};

export default Home;
