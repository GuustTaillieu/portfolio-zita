import React from 'react';
import { motion } from 'framer-motion';
import anims from '../../animations';
import { ContentProps } from '../../Components/SectionContent/SectionContent';
import { Link } from 'react-router-dom';

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
					Quia commodi eius doloremque dolorum, perferendis quis.
					Eaque obcaecati labore fugiat optio sunt ipsam accusantium
					eos distinctio dolorum. Fuga magnam voluptas omnis
					blanditiis sequi inventore ea est laboriosam natus, eos
					facere! Ea quas perferendis voluptates quasi dolorem unde
					culpa nihil, molestiae mollitia.
				</p>
				<Link to='/projects'>
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className='button'>
						See Projects
					</motion.button>
				</Link>
			</motion.div>
		</div>
	);
}

export default Projects;
