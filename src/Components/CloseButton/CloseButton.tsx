import React from 'react';
import { motion } from 'framer-motion';
import anims from '../../animations';
import './CloseButton.scss';
import { FaTimesCircle } from 'react-icons/fa';

type Props = {
	callback: () => void;
};

const CloseButton = ({ callback }: Props) => {
	return (
		<motion.div
			className='close-btn'
			onClick={callback}
			layoutId='close-btn'>
			<FaTimesCircle />
		</motion.div>
	);
};

export default CloseButton;
