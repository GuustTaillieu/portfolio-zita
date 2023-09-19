import { motion } from 'framer-motion';
import { DefaultPageTransition } from '../../transitions';

type Props = {};

const Contact = (props: Props) => {
	return (
		<DefaultPageTransition>
			<div className='contact'>
				<h2>Contact</h2>
			</div>
		</DefaultPageTransition>
	);
};

export default Contact;
