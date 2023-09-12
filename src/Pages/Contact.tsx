import { motion } from 'framer-motion';
import { PageTransition } from '../transitions';

type Props = {};

const Contact = (props: Props) => {
	return (
		<PageTransition>
			<div className='contact'>
				<h2>Contact</h2>
			</div>
		</PageTransition>
	);
};

export default Contact;
