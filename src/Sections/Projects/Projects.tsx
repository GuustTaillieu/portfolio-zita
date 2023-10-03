import React from 'react';
import { motion } from 'framer-motion';
import anims from '../../animations';
import { ContentProps } from '../../Components/SectionContent/SectionContent';
import SeeMoreButton from '../../Components/SeeMoreButton/SeeMoreButton';

type Props = {};

function Projects({ showContent }: ContentProps) {
	return (
		<div className={'content'}>
			<motion.div
				className='about_me'
				variants={anims.sectionContentAnim}
				initial='initial'
				animate={showContent ? 'animate' : 'initial'}
				key='about_me'>
				<h3>Projects</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Obcaecati non alias magnam, tempora distinctio quos
					excepturi, provident laudantium porro similique eius
					blanditiis dolores nam. Possimus, accusamus adipisci? Quae,
					hic. Dolores.
				</p>
				<SeeMoreButton to='/projects' />
			</motion.div>
		</div>
	);
}

export default Projects;
