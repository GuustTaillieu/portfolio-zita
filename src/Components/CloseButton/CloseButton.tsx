import {} from 'react';
import { motion } from 'framer-motion';
import './CloseButton.scss';
import { FaArrowLeft } from 'react-icons/fa';
import { useLocation } from 'react-router';
import { isInverted } from '../../transitions';

type Props = {
	callback: () => void;
};

const CloseButton = ({ callback }: Props) => {
	const location = useLocation();

	return (
		<motion.div
			className={'close-btn' + isInverted(location.pathname)}
			onClick={callback}
			data-cursor-text=''
			data-cursor='-exclusion'
			layoutId='close-btn'>
			<FaArrowLeft />
		</motion.div>
	);
};

export default CloseButton;
