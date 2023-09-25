import {} from 'react';
import { motion } from 'framer-motion';
import anims from '../../animations';
import { ContentProps } from '../../Components/SectionContent/SectionContent';

function Experience({ showContent }: ContentProps) {
	return (
		<div className='content'>
			<motion.div
				className='experience'
				variants={anims.sectionContentAnim}
				initial='initial'
				animate={showContent ? 'animate' : 'initial'}
				key='experience'>
				<h3>Experience</h3>
			</motion.div>
		</div>
	);
}

export default Experience;
