import { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './SectionNextProject.scss';
import { PROJECTS } from '../../../Pages/ProjectsPage/projects-data';
import { Link, useNavigate } from 'react-router-dom';

type Props = {
	currentProjectId: number;
};

const SectionNextProject = ({ currentProjectId }: Props) => {
	const navigate = useNavigate();

	const nextProject = useMemo(() => {
		const nextProject = PROJECTS.find(
			(project) => project.id === currentProjectId + 1
		);
		return nextProject ?? PROJECTS[0];
	}, [currentProjectId]);

	return (
		<motion.div
			className='project_section'
			data-type='next_project'
			onClick={() => navigate(`/projects/${nextProject.id}`)}>
			<motion.h2
				data-cursor='-exclusion'
				className='project_title'
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 'all' }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}>
				Next Project
			</motion.h2>
			<motion.img
				data-cursor='-exclusion'
				src={nextProject.image}
				alt={'next project'}
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.1 }}
			/>
		</motion.div>
	);
};

export default SectionNextProject;
