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
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Repudiandae velit esse, odit adipisci veniam expedita rerum,
					impedit fugiat quaerat facere ab aut natus? Similique culpa,
					vel dolorum ab amet facere.
				</p>
			</motion.div>
		</div>
	);
}

export default Aboutme;
