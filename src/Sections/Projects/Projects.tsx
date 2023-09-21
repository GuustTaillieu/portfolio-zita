import {} from 'react';
import { motion } from 'framer-motion';
import anims from '../../animations';
import './Projects.scss';
import { ContentProps } from '../../Components/SectionContent/SectionContent';

function Projects({ showContent }: ContentProps) {
	return (
		<motion.div
			className='projects'
			variants={anims.sectionContentAnim}
			initial='initial'
			animate={showContent ? 'animate' : 'initial'}
			key='projects'>
			<h2>Projects</h2>
		</motion.div>
	);
}

export default Projects;
