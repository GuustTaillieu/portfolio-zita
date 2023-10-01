import { motion } from 'framer-motion';
import { DefaultPageTransition } from '../../transitions';

type Props = {};

const ContactPage = (props: Props) => {
	return (
		<div className='contact'>
			<h2>Contact</h2>
		</div>
	);
};

export default (props: Props) => DefaultPageTransition(ContactPage);
