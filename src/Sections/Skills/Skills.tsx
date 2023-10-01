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
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Itaque incidunt numquam sunt officia fuga reprehenderit quam
					aliquam rerum minus. Itaque, repudiandae id hic repellendus
					iste voluptates soluta accusantium dolor modi?
				</p>
			</motion.div>
		</div>
	);
}

export default Skills;
