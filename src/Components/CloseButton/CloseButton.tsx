import React from 'react';
import { motion } from 'framer-motion';
import anims from '../../animations';
import './CloseButton.scss';

type Props = {
	callback: () => void;
};

const CloseButton = ({ callback }: Props) => {
	return (
		<motion.div
			className='close-btn'
			onClick={callback}
			layoutId='close-btn'>
			<motion.div
				className='close-btn__line'
				variants={anims.closeBtnLineAnim}
			/>
			<motion.div
				className='close-btn__line'
				variants={anims.closeBtnLineAnim}
			/>
		</motion.div>
	);
};

export default CloseButton;
