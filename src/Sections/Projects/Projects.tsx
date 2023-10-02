import React from 'react';
import { motion } from 'framer-motion';
import anims from '../../animations';
import { ContentProps } from '../../Components/SectionContent/SectionContent';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

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
				<motion.div
					whileHover={{ x: 5 }}
					whileTap={{ x: 5, scale: 0.9 }}
					className='see-more_button'>
					<Link to='/projects'>
						See Projects
						<span>
							<FaAngleRight />
						</span>
					</Link>
				</motion.div>
			</motion.div>
		</div>
	);
}

export default Projects;
