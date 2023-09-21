import {} from 'react';
import { motion } from 'framer-motion';
import anims from '../../animations';
import { ContentProps } from '../../Components/SectionContent/SectionContent';

function Skills({ showContent }: ContentProps) {
	return (
		<motion.div
			className='skills'
			variants={anims.sectionContentAnim}
			initial='initial'
			animate={showContent ? 'animate' : 'initial'}
			key='skills'>
			<h2>Skills</h2>
		</motion.div>
	);
}

export default Skills;
