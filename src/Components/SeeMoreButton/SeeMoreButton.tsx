import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight } from 'react-icons/fa';
import './SeeMoreButton.scss';
import cursor from '../../customCursor';

type Props = {
	to: string;
};

const SeeMoreButton = ({ to }: Props) => {
	const sticky = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!sticky.current) return;
		sticky.current.addEventListener('mouseenter', () => {
			cursor.setStick(sticky.current!);
		});

		sticky.current.addEventListener('mouseleave', () => {
			cursor.removeStick();
		});
	}, []);

	return (
		<motion.div
			whileHover={{ x: 5 }}
			whileTap={{ x: 5, scale: 0.9 }}
			className='see-more_button'
			ref={sticky}
			data-cursor='-exclusion'>
			<Link to={to}>
				See Projects
				<span>
					<FaAngleDoubleRight />
				</span>
			</Link>
		</motion.div>
	);
};

export default SeeMoreButton;
