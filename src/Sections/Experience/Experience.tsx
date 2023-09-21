import {} from 'react';
import { motion } from 'framer-motion';
import anims from '../../animations';
import { ContentProps } from '../../Components/SectionContent/SectionContent';

function Experience({ showContent }: ContentProps) {
	return (
		<motion.div
			className='experience'
			variants={anims.sectionContentAnim}
			initial='initial'
			animate={showContent ? 'animate' : 'initial'}
			key='experience'>
			<h2>Experience</h2>
		</motion.div>
	);
}

export default Experience;
