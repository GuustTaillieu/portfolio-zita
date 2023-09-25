import {} from 'react';
import { motion } from 'framer-motion';
import anims from '../../animations';
import { ContentProps } from '../../Components/SectionContent/SectionContent';

function Aboutme({ showContent }: ContentProps) {
	return (
		<div className='content'>
			<motion.div
				className='about_me'
				variants={anims.sectionContentAnim}
				initial='initial'
				animate={showContent ? 'animate' : 'initial'}
				key='about_me'>
				<h3>About me</h3>
			</motion.div>
		</div>
	);
}

export default Aboutme;
