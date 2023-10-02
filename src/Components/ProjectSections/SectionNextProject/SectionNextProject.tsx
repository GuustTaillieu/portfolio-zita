import { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './SectionNextProject.scss';
import { PROJECTS } from '../../../Pages/ProjectsPage/projects-data';
import { Link } from 'react-router-dom';

type Props = {
	currentProjectId: number;
};

const SectionNextProject = ({ currentProjectId }: Props) => {
	const nextProject = useMemo(() => {
		const nextProject = PROJECTS.find(
			(project) => project.id === currentProjectId + 1
		);
		return nextProject ?? PROJECTS[0];
	}, [currentProjectId]);

	return (
		<Link to={`/projects/${nextProject.id}`}>
			<motion.div className='project_section' data-type='next_project'>
				<motion.h2
					className='project_title'
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 'all' }}
					transition={{ duration: 0.5, ease: 'easeInOut' }}>
					Next Project
				</motion.h2>
				<motion.img
					src={nextProject.image}
					alt={'next project'}
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
				/>
			</motion.div>
		</Link>
	);
};

export default SectionNextProject;
