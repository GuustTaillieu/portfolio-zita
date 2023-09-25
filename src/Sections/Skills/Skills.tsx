import {} from 'react';
import { motion } from 'framer-motion';
import anims from '../../animations';
import { ContentProps } from '../../Components/SectionContent/SectionContent';

function Skills({ showContent }: ContentProps) {
	return (
		<div className='content'>
			<motion.div
				className='skills'
				variants={anims.sectionContentAnim}
				initial='initial'
				animate={showContent ? 'animate' : 'initial'}
				key='skills'>
				<h3>Skills</h3>
			</motion.div>
		</div>
	);
}

export default Skills;
