import {} from 'react';
import { motion } from 'framer-motion';
import anims from '../../animations';
import { ContentProps } from '../../Components/SectionContent/SectionContent';

function Aboutme({ showContent }: ContentProps) {
	return (
		<motion.div
			className='about_me'
			variants={anims.sectionContentAnim}
			initial='initial'
			animate={showContent ? 'animate' : 'initial'}
			key='about_me'>
			<h2>About me</h2>
		</motion.div>
	);
}

export default Aboutme;
